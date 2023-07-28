function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const a = queries[i][0];
    const b = queries[i][1];

    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  return arr;
}