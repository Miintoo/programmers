function solution(my_string, overwrite_string, s) {
  var answer = '';
  const my_length = my_string.length;
  const over_length = overwrite_string.length;
  const l = my_length - s - over_length;

  answer += my_string.substr(0, s);
  answer += overwrite_string;
  answer += my_string.substr(my_string.length - l, my_string.length - 1);
  return answer;
}