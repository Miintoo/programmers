function solution(num, k) {
    var answer = 0;
    const a = String(num).split('');
    console.log(a.indexOf(String(k)));
    if (a.indexOf(String(k)) === -1) {
        answer = -1;
    } else {
        answer = a.indexOf(String(k)) + 1;
    }
    return answer;
}