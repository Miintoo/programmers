function solution(my_strings, parts) {
  var answer = '';
  for (let i = 0; i < parts.length; i++) {
    const s = parts[i][0];
    const e = parts[i][1];

    answer += my_strings[i].substr(s, e - s + 1)
  }
  return answer;
}