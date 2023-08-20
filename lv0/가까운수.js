function solution(array, n) {
  var answer = 0;
  let min = 0;
  for (let i = 0; i < array.length; i++) {
    let minus = Math.abs(array[i] - n);
    if (i === 0) {
      min = minus;
      answer = array[i];
      continue;
    }
    if (min > minus) {
      min = minus;
      answer = array[i];
    } else if (min === minus) {
      if (answer > array[i]) {
        answer = array[i];
      }
    }
  }
  return answer;
}
