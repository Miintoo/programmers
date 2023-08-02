function solution(myString, pat) {
  var answer = 0;
  const newMyString = myString.toLowerCase();
  const newPat = pat.toLowerCase();

  if (newMyString.includes(newPat)) {
    answer = 1;
  }
  return answer;
}