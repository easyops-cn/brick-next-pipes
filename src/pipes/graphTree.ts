import {
  find,
  get,
  groupBy,
  uniq,
  map,
  forEach,
  isEmpty,
  orderBy,
} from "lodash";

/**
 * A graph data.
 *
 * @public
 */
export interface GraphData {
  edges: GraphEdge[];
  topic_vertices: GraphVertex[];
  vertices: GraphVertex[];
}

/**
 * A graph edge.
 *
 * @public
 */
export interface GraphEdge {
  out_name: string;
  in: string;
  out: string;
}

/**
 * A graph vertex.
 *
 * @public
 */
export interface GraphVertex {
  instanceId: string;
  [key: string]: any;
}

/**
 * A graph query.
 *
 * @public
 */
export interface GraphQuery {
  sort?: {
    key: string;
    order: 1 | -1;
  };
}

/**
 * Produces the tree hierarchy data from graph data.
 *
 * @public
 *
 * @example
 *
 * ```ts
 * const data: GraphData = {
 *   topic_vertices: [
 *     {
 *       instanceId: "1",
 *       name: "A",
 *     },
 *     {
 *       instanceId: "2",
 *       name: "B",
 *     }
 *   ],
 *   vertices: [
 *     {
 *       instanceId: "3",
 *       name: "C",
 *     },
 *     {
 *       instanceId: "4",
 *       name: "D",
 *     }
 *   ],
 *   edges: [
 *     {
 *       out: "1",
 *       in: "3",
 *       out_name: "children",
 *     },
 *     {
 *       out: "2",
 *       in: "4",
 *       out_name: "children",
 *     }
 *   ]
 * }
 * graphTree(data)
 * // Returns:
 * // [
 * //   {instanceId: "1", name: "A", children: [{instanceId: "3", name: "C"}]},
 * //   {instanceId: "2", name: "B", children: [{instanceId: "4", name: "D"}]}
 * // ]
 * ```
 *
 * @param value - The graph data
 * @param query - The graph query (includes sort)
 *
 * @returns The tree hierarchy data
 */
export function graphTree(value: GraphData, query?: GraphQuery): GraphVertex[] {
  if (!value) {
    return [];
  }
  const sort = query?.sort;
  const groupByEdgeOut = groupBy(value.edges, "out");
  const findChildren = (node: GraphVertex): GraphVertex => {
    const relationEdges = groupByEdgeOut[node.instanceId];
    forEach(relationEdges, (edge) => {
      const key = edge.out_name;
      const foundInstance = find(value.vertices, ["instanceId", edge.in]);
      if (foundInstance) {
        const resultInstance = findChildren(foundInstance);
        if (node[key]) {
          node[key].push(resultInstance);
        } else {
          node[key] = [resultInstance];
        }
      }
    });
    if (sort) {
      const keyList = uniq(map(relationEdges, "out_name"));
      forEach(keyList, (key) => {
        if (!isEmpty(node[key])) {
          node[key] = orderBy(
            node[key],
            (item) => get(item, sort.key) ?? -Infinity,
            sort.order === -1 ? "desc" : "asc"
          );
        }
      });
    }
    return node;
  };
  const result =
    value.topic_vertices?.map((root) => {
      return findChildren(root);
    }) ?? [];
  return result;
}
