function solution(num, total) {
  var answer = [];
  let isTrue = false;
  let start = 0;
  while (!isTrue) {
    let result = 0;
    for (let i = start; i < num + start; i++) {
      result += i;
    }
    if (total === result) {
      isTrue = true;
    } else if (total > result) {
      start += 1;
    } else {
      start -= 1;
    }
  }
  for (let i = start; i < num + start; i++) {
    answer.push(i);
  }
  return answer;
}