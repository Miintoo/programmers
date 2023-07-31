function solution(my_string, queries) {
  var answer = [...my_string];
  for (let i = 0; i < queries.length; i++) {
    let s = queries[i][0];
    let e = queries[i][1];
    const length = Math.floor((e - s) / 2);

    for (let j = 0; j <= length; j++) {
      const s_j = s + j;
      const e_j = e - j;
      const temp = answer[s_j];
      answer[s_j] = answer[e_j];
      answer[e_j] = temp;
    }
  }
  answer = answer.join('');
  return answer;
}