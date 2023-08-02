function solution(myString, pat) {
  var answer = 0;
  const startPat = pat[0];

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === startPat) {
      let isMatch = true;
      for (let j = 1; j < pat.length; j++) {
        if (myString[i + j] !== pat[j]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        answer += 1;
      }
    }
  }
  return answer;
}