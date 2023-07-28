function solution(a, b) {
    var answer = 0;
    const num1 = Number(String(a) + String(b));
    const num2 = 2 * a * b;
    
    if (num1 > num2) {
        answer = num1;
    } else if (num1 < num2) {
        answer = num2;
    } else {
        answer = num1;
    }
    return answer;
}