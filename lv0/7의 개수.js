function solution(array) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    let a = String(array[i]);
    for (let j = 0; j < a.length; j++) {
      if (a[j] === '7') {
        answer += 1;
      }
    }
  }
  return answer;
}