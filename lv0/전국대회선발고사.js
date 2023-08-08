function solution(rank, attendance) {
  var answer = 0;
  let count = 0;
  const select = [];
  for (let i = 1; i <= rank.length; i++) {
    const index = rank.indexOf(i);
    if (attendance[index] && count < 3) {
      select.push(index);
      count += 1;
    }
  }
  answer = select[0] * 10000 + select[1] * 100 + select[2];
  return answer;
}