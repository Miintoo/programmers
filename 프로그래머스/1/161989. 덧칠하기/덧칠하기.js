function solution(n, m, section) {
    var answer = 0;
    const paintArray = new Array(n).fill(1);
    
    //페인트를 칠해야하는곳은 0 칠하지 않아도 되는곳은 1로 초기화
    for (let i = 0; i < section.length; i++) {
        paintArray[section[i] - 1] = 0;
    }
    
    // 루프를 돌면서 페인트 칠하기
    for (let i = 0; i < n; ) {
        if (!paintArray[i]) {
            answer += 1;
            for (let j = i; j < m + i; j++) {
                paintArray[j] = 1;             
            }
        i += m;
        } else {
            i++;
        }
    }
    return answer;
}