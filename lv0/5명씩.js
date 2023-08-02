function solution(names) {
  var answer = [];
  const s = Math.floor(names.length / 5);
  const e = names.length % 5;

  for (let i = 0; i < s; i++) {
    answer.push(names[5 * i]);
  }

  if (e > 0) {
    answer.push(names[5 * s]);
  }


  return answer;
}