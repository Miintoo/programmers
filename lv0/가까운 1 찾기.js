function solution(arr, idx) {
  var answer = 0;
  let isAnswer = false;
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      answer = i;
      isAnswer = true;
      break;
    }
  }
  if (!isAnswer) {
    answer = -1;
  }
  return answer;
}