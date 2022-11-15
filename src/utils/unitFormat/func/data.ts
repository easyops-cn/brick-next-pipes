import {
  BytesUnitId as DataFormatUnitId,
  Unit as FormatUnit,
  bytes,
  bibytes,
  deprecatedBytes,
} from "../constants";
import { matchDataUnit } from "./util";

export const dataFormatUnits: FormatUnit[][] = [
  bytes,
  bibytes,
  // deprecated
  deprecatedBytes,
];

export const dataFormatUnitIds = ([] as string[]).concat.apply(
  [],
  dataFormatUnits.map((dataFormatUnitGroup) => [
    ...dataFormatUnitGroup.map((dataFormatUnit) => dataFormatUnit.id),
    ...([] as string[]).concat.apply(
      [],
      dataFormatUnitGroup.map((dataFormatUnit) =>
        dataFormatUnit.alias ? dataFormatUnit.alias : []
      )
    ),
  ])
);

export function humanizeDataValue(
  value: number,
  unit?: DataFormatUnitId,
  targetUnit?: DataFormatUnitId
): [number, string] {
  let baseDataUnitGroupIndex = dataFormatUnits.length - 1;
  let baseDataUnitIndex = 0;
  let targetDataUnitIndex = -1;

  const sign = Math.sign(value);
  const positiveValue = Math.abs(value);

  if (unit) {
    for (let i = 0; i < dataFormatUnits.length; ++i) {
      let _baseDataUnitIndex = -1;
      let _targetDataUnitIndex = -1;

      dataFormatUnits[i].forEach((dataUnit, index) => {
        if (matchDataUnit(dataUnit, unit)) _baseDataUnitIndex = index;
        if (matchDataUnit(dataUnit, targetUnit)) _targetDataUnitIndex = index;
      });

      if (_baseDataUnitIndex !== -1) {
        baseDataUnitGroupIndex = i;
        baseDataUnitIndex = _baseDataUnitIndex;
        targetDataUnitIndex = _targetDataUnitIndex;
        break;
      }
    }
  } else if (targetUnit) {
    targetDataUnitIndex = dataFormatUnits[baseDataUnitGroupIndex].findIndex(
      (dataUnit) => matchDataUnit(dataUnit, targetUnit)
    );
  }

  const dataFormatUnitGroup = dataFormatUnits[baseDataUnitGroupIndex];

  const baseDataFormatUnit = dataFormatUnitGroup[baseDataUnitIndex];
  let targetDataFormatUnit = baseDataFormatUnit;

  if (targetDataUnitIndex === -1) {
    for (let i = baseDataUnitIndex + 1; i < dataFormatUnitGroup.length; ++i) {
      if (
        positiveValue /
          (dataFormatUnitGroup[i].divisor / baseDataFormatUnit.divisor) >=
        1
      ) {
        targetDataFormatUnit = dataFormatUnitGroup[i];
      } else {
        break;
      }
    }
  } else {
    targetDataFormatUnit = dataFormatUnitGroup[targetDataUnitIndex];
  }

  if (targetUnit && targetDataUnitIndex === -1) {
    console.warn(
      `Cannot convert unit "${
        unit || baseDataFormatUnit.display
      }" to "${targetUnit}"`
    );
  }

  return [
    (positiveValue /
      (targetDataFormatUnit.divisor / baseDataFormatUnit.divisor)) *
      sign,
    targetDataFormatUnit.display,
  ];
}
