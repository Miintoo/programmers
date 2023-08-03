function solution(myString) {
  var answer = [];
  const newString = myString.split('x');
  const filterString = newString.filter(item => item !== '');
  answer = filterString.sort();
  return answer;
}