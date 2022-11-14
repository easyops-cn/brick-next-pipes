import {
  TimesUnitId as TimeFormatUnitId,
  Unit as FormatUnit,
  times,
} from "../constants";
import { matchUnit } from "./util";

export const timeFormatUnits: FormatUnit[][] = [times];

export const timeFormatUnitIds = ([] as string[]).concat.apply(
  [],
  timeFormatUnits.map((timeFormatUnitGroup) => [
    ...timeFormatUnitGroup.map((timeFormatUnit) => timeFormatUnit.id),
    ...([] as string[]).concat.apply(
      [],
      timeFormatUnitGroup.map((timeFormatUnit) =>
        timeFormatUnit.alias ? timeFormatUnit.alias : []
      )
    ),
  ])
);

export function humanizeTimeValue(
  value: number,
  unit?: TimeFormatUnitId,
  targetUnit?: TimeFormatUnitId
): [number, string] {
  let baseTimeUnitGroupIndex = 0;
  let baseTimeUnitIndex = 2;
  let targetTimeUnitIndex = -1;

  if (unit) {
    for (let i = 0; i < timeFormatUnits.length; ++i) {
      let _baseTimeUnitIndex = -1;
      let _targetTimeUnitIndex = -1;

      timeFormatUnits[i].forEach((timeUnit, index) => {
        if (matchUnit(timeUnit, unit)) _baseTimeUnitIndex = index;
        if (matchUnit(timeUnit, targetUnit)) _targetTimeUnitIndex = index;
      });

      if (_baseTimeUnitIndex !== -1) {
        baseTimeUnitGroupIndex = i;
        baseTimeUnitIndex = _baseTimeUnitIndex;
        targetTimeUnitIndex = _targetTimeUnitIndex;
        break;
      }
    }
  } else if (targetUnit) {
    targetTimeUnitIndex = timeFormatUnits[baseTimeUnitGroupIndex].findIndex(
      (timeUnit) => matchUnit(timeUnit, targetUnit)
    );
  }

  const timeFormatUnitGroup = timeFormatUnits[baseTimeUnitGroupIndex];

  const baseTimeFormatUnit = timeFormatUnitGroup[baseTimeUnitIndex];
  let targetTimeFormatUnit = baseTimeFormatUnit;

  if (targetTimeUnitIndex === -1) {
    for (let i = baseTimeUnitIndex + 1; i < timeFormatUnitGroup.length; ++i) {
      if (
        value / (timeFormatUnitGroup[i].divisor / baseTimeFormatUnit.divisor) >=
        1
      ) {
        targetTimeFormatUnit = timeFormatUnitGroup[i];
      } else {
        break;
      }
    }
  } else {
    targetTimeFormatUnit = timeFormatUnitGroup[targetTimeUnitIndex];
  }

  if (targetUnit && targetTimeUnitIndex === -1) {
    console.warn(
      `Cannot convert unit "${
        unit || baseTimeFormatUnit.display
      }" to "${targetUnit}"`
    );
  }

  return [
    value / (targetTimeFormatUnit.divisor / baseTimeFormatUnit.divisor),
    targetTimeFormatUnit.display,
  ];
}
