import {
  ByteRatesUnitId as DataRateFormatUnitId,
  Unit as FormatUnit,
  bitRates,
  byteRates,
  deprecatedByteRates,
} from "../constants";
import { matchUnit } from "./util";

export const dataRateFormatUnits: FormatUnit[][] = [
  bitRates,
  byteRates,
  // deprecated
  deprecatedByteRates,
];

export const dataRateFormatUnitIds = ([] as string[]).concat.apply(
  [],
  dataRateFormatUnits.map((dataRateFormatUnitGroup) => [
    ...dataRateFormatUnitGroup.map(
      (dataRateFormatUnit) => dataRateFormatUnit.id
    ),
    ...([] as string[]).concat.apply(
      [],
      dataRateFormatUnitGroup.map((dataRateFormatUnit) =>
        dataRateFormatUnit.alias ? dataRateFormatUnit.alias : []
      )
    ),
  ])
);

export function humanizeDataRateValue(
  value: number,
  unit?: DataRateFormatUnitId,
  targetUnit?: DataRateFormatUnitId
): [number, string] {
  let baseDataRateUnitGroupIndex = dataRateFormatUnits.length - 1;
  let baseDataRateUnitIndex = 0;
  let targetDataRateUnitIndex = -1;

  const sign = Math.sign(value);
  const positiveValue = Math.abs(value);

  if (unit) {
    for (let i = 0; i < dataRateFormatUnits.length; ++i) {
      let _baseDataRateUnitIndex = -1;
      let _targetDataRateUnitIndex = -1;

      dataRateFormatUnits[i].forEach((dataRateUnit, index) => {
        if (matchUnit(dataRateUnit, unit)) _baseDataRateUnitIndex = index;
        if (matchUnit(dataRateUnit, targetUnit))
          _targetDataRateUnitIndex = index;
      });

      if (_baseDataRateUnitIndex !== -1) {
        baseDataRateUnitGroupIndex = i;
        baseDataRateUnitIndex = _baseDataRateUnitIndex;
        targetDataRateUnitIndex = _targetDataRateUnitIndex;
        break;
      }
    }
  } else if (targetUnit) {
    targetDataRateUnitIndex = dataRateFormatUnits[
      baseDataRateUnitGroupIndex
    ].findIndex((dataRateUnit) => matchUnit(dataRateUnit, targetUnit));
  }

  const dataRateFormatUnitGroup =
    dataRateFormatUnits[baseDataRateUnitGroupIndex];

  const baseDataRateFormatUnit = dataRateFormatUnitGroup[baseDataRateUnitIndex];
  let targetDataRateFormatUnit = baseDataRateFormatUnit;

  if (targetDataRateUnitIndex === -1) {
    for (
      let i = baseDataRateUnitIndex + 1;
      i < dataRateFormatUnitGroup.length;
      ++i
    ) {
      if (
        positiveValue /
          (dataRateFormatUnitGroup[i].divisor /
            baseDataRateFormatUnit.divisor) >=
        1
      ) {
        targetDataRateFormatUnit = dataRateFormatUnitGroup[i];
      } else {
        break;
      }
    }
  } else {
    targetDataRateFormatUnit = dataRateFormatUnitGroup[targetDataRateUnitIndex];
  }

  if (targetUnit && targetDataRateUnitIndex === -1) {
    console.warn(
      `Cannot convert unit "${
        unit || baseDataRateFormatUnit.display
      }" to "${targetUnit}"`
    );
  }

  return [
    (positiveValue /
      (targetDataRateFormatUnit.divisor / baseDataRateFormatUnit.divisor)) *
      sign,
    targetDataRateFormatUnit.display,
  ];
}
