import { find as _find } from "lodash";

/**
 * 从一个数据集合中找到第一个匹配的元素。
 *
 * @category Collection
 *
 * @remarks 透传调用 {@link https://lodash.com/docs/#find | _.find}。
 *
 * @public
 *
 * @param collection - 要搜索的集合。
 * @param predicate - 需要匹配的条件。
 * @param fromIndex - 从哪个位置开始搜索。
 *
 * @returns 返回找到的元素，没有找到时返回 `undefined`。
 */
export function find(
  collection: unknown[] | Record<string, unknown>,
  predict:
    | string
    | number
    | Record<string, unknown>
    | [string | number, unknown],
  fromIndex?: number
): unknown {
  return _find(collection, predict, fromIndex);
}
