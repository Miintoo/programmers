function solution(targets) {
    var answer = 0;
    const sortTargets = targets.sort((a, b) => a[1] - b[1]);
    
    let end = 0;
    for (let i = 0; i < targets.length; i++) {
        const s = sortTargets[i][0];
        const e = sortTargets[i][1];
        if (s >= end) {
            answer += 1;
            end = e;
        }
    }
    return answer;
}