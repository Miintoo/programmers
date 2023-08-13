function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    let a = quiz[i].split(' ');
    if (a[1] === '-') {
      let result = +a[0] - +a[2];
      if (result === +a[4]) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    } else {
      let result = +a[0] + +a[2];

      if (result === +a[4]) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }
  }
  return answer;
}