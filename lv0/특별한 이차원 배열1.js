function solution(n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    const ary = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        ary.push(1);
      } else {
        ary.push(0);
      }
    }
    answer.push(ary);
  }
  return answer;
}