function solution(arr) {
  var answer = [];
  let idx = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      idx.push(i);
    }
  }
  if (idx.length === 0) {
    answer.push(-1);
  }

  const min = idx[0];
  const max = idx[idx.length - 1];

  for (let i = min; i <= max; i++) {
    answer.push(arr[i]);
  }

  return answer;
}