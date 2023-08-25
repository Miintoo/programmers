function solution(my_string) {
  var answer = '';
  let checked = [];

  for (let i = 0; i < my_string.length; i++) {
    if (checked.includes(my_string[i])) {
      continue;
    }
    answer += my_string[i];
    checked.push(my_string[i]);
  }
  return answer;
}
