function solution(arr, intervals) {
  var answer = [];
  const s1 = intervals[0][0];
  const e1 = intervals[0][1];

  const s2 = intervals[1][0];
  const e2 = intervals[1][1];

  for (let i = s1; i <= e1; i++) {
    answer.push(arr[i]);
  }


  for (let i = s2; i <= e2; i++) {
    answer.push(arr[i]);
  }

  return answer;
}