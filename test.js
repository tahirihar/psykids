function allShortDistance(graph, start) {
  //объект с числовыми значениями дистанции
  const distance = {};

  //объект с посещенными вершинами
  const visited = new Set();

  //задаем старту 0, а всем остальным вершинами значение бесконечности
  for (const key in graph) {
    if (key !== start) {
      distance[key] = Infinity;
    } else {
      distance[start] = 0;
    }
  }

  //пока мы не посетим все вершины, цикл будет крутиться
  while (visited.size !== Object.keys(graph).length) {
    let lowesDistanse = Infinity;

    //текущая вершина
    let node = null;

    //текущей вершине задаем реальное значение
    for (const key in distance) {
      if (lowesDistanse > distance[key] && !visited.has(key)) {
        lowesDistanse = distance[key];
        node = key;
      }
    }

    // { a: 2, d: 3 } - b, если мы в b
    const neibs = graph[node];

    for (const key in neibs) {
      //складываем миниамальное рсстояние от начальной вершины до текущей вершины с расстоянием от текущей вершины с соседней вершиной
      const newDistance = distance[node] + neibs[key];

      //находим расстояние до соседей
      if (newDistance < distance[key]) {
        distance[key] = newDistance;
      }
    }

    //добавляем в объект посещенные вершины
    visited.add(node);
  }

  return distance;
}

const graph = {
  a: { b: 2, c: 1, i: 3 },
  b: { a: 2, d: 3 },
  c: { a: 1, d: 1 },
  d: { b: 3, c: 1, e: 5 },
  e: { d: 5, i: 2 },
  i: { a: 3, e: 2 },
};

const result = allShortDistance(graph, 'a');
// console.log(result);

let tree = {
  data: 1,
  refs: [
    {
      data: 5,
      refs: [
        { data: 10 },
        {
          data: 7,
          refs: [{ data: 9 }, { data: 8 }],
        },
        { data: 6 },
      ],
    },
    {
      data: 2,
      refs: [{ data: 4 }, { data: 3 }],
    },
  ],
};

function recursive(tree) {
  let sum = 0;

  sum += tree.data;

  if (tree.refs) {
    tree.refs.forEach((child) => {
      sum += recursive(child);
    });
  }

  return sum;
}
console.log(recursive(tree));
