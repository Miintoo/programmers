function solution(myString) {
  var answer = [];
  const newMyString = myString.split('x');
  for (let i = 0; i < newMyString.length; i++) {
    answer.push(newMyString[i].length);
  }
  return answer;
}