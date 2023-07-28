function solution(num_list) {
  var answer = 0;
  const odd = [];
  const even = [];

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even.push(num_list[i]);
    } else {
      odd.push(num_list[i]);
    }
  }

  const oddStr = +odd.join('');
  const evenStr = +even.join('');

  answer = oddStr + evenStr;
  return answer;
}