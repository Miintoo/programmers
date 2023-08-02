function solution(my_string, alp) {
  var answer = '';
  const arrayString = my_string.split('');

  for (let i = 0; i < arrayString.length; i++) {
    if (arrayString[i] === alp) {
      arrayString[i] = arrayString[i].toUpperCase();
    }
  }
  answer = arrayString.join('');
  return answer;
}