function solution(X, Y) {
    var answer = '';
    
    const xHash = {};
    const yHash = {};
    const joinArray = new Array(10).fill(0);
    
    for (let i = 0; i < X.length; i++) {
        if (!xHash[X[i]]) {
            xHash[X[i]] = 1;
        } else {
            xHash[X[i]] += 1;
        }
    }
    
    for (let i = 0; i < Y.length; i++) {
        if (!yHash[Y[i]]) {
            yHash[Y[i]] = 1;
        } else {
            yHash[Y[i]] += 1;
        }
    }
    

    // xHash와 yHash값중 일치하는 경우를 모두 배열에 대입
    for (let i = 0; i < 10; i++) {
        if (xHash[i] !== undefined && yHash[i] !== undefined) {
            const min = Math.min(xHash[i], yHash[i]);
            joinArray[i] = min;
        }
    }
    // joinArray 돌면서 최대값 구하기
    for (let i = 9; i >= 0; i--) {
        if (joinArray[i] > 0) {
            if (answer === '' && i === 0) {
                answer = '0';
            } else {
                answer += String(i).repeat(joinArray[i]);
                
            }
        }
    }
    
    if (answer === '') {
        return '-1';
    }
    
    return answer;
}