function solution(my_string) {
  var answer = '';
  const newString = my_string.toLowerCase().split('').sort();
  answer = newString.join('');
  return answer;
}