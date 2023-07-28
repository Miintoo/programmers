function solution(arr, queries) {
  var answer = [];

  for (let i = 0; i < queries.length; i++) {
    const k = queries[i][2];

    const s = queries[i][0];
    const e = queries[i][1];

    const li = [];
    for (let j = s; j <= e; j++) {
      if (k < arr[j]) {
        li.push(arr[j]);
      }
    }

    if (li.length === 0) {
      answer.push(-1);
    } else {
      answer.push(Math.min(...li));
    }
  }
  return answer;
}