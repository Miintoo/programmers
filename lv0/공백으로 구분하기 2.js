function solution(my_string) {
  var answer = [];
  let value = '';
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === ' ' && value === '') {
      continue;
    } else if (my_string[i] === ' ' && value !== '') {
      answer.push(value);
      value = '';
    } else if (my_string[i] !== ' ') {
      value += my_string[i];
    }
  }
  if (value !== '') {
    answer.push(value);
  }
  return answer;
}