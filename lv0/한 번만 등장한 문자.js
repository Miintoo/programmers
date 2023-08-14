function solution(s) {
  var answer = '';
  const checkedS = [];
  const resultS = [];
  for (let i = 0; i < s.length; i++) {
    let a = s[i];
    let isChecked = false
    if (checkedS.includes(a)) {
      continue;
    }
    for (let j = i + 1; j < s.length; j++) {
      if (a === s[j]) {
        checkedS.push(a);
        isChecked = true;
      }
    }
    if (!isChecked) {
      resultS.push(a);
    }
  }
  answer = resultS.sort();
  answer = answer.join('');
  return answer;
}