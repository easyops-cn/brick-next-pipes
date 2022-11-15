import { Unit } from "../constants";

export const matchUnit = (unitData: Unit, unit: string): boolean => {
  return (
    unitData.id.toLocaleLowerCase() === unit?.toLocaleLowerCase() ||
    (unitData.alias &&
      unitData.alias.map((alias) => alias.toLocaleLowerCase()).includes(unit))
  );
};

// 由于 bytes 的单位中会有 b 和 B ，所以对别名进行判断时不能转换为小写
export const matchDataUnit = (unitData: Unit, unit: string): boolean => {
  return (
    unitData.id.toLocaleLowerCase() === unit?.toLocaleLowerCase() ||
    (unitData.alias && unitData.alias.includes(unit))
  );
};
