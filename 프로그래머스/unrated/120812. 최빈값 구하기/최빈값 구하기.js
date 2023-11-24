function solution(array) {
    var answer = 0;
    const a = [];
    const b = [];
    
    for (let i = 0; i < array.length; i++) {
        if (!a.includes(array[i])) {
            a.push(array[i]);
            b.push(1);
        } else {
            const index = a.indexOf(array[i]);
            b[index] += 1;
        }
    }
    const max = Math.max(...b);
    const count = b.reduce((c, a) => c + (max === a), 0);

    if (count === 1) {
        const index = b.indexOf(max);
        answer = a[index];
    } else {
        answer = -1;
    }
    
    return answer;
    
    
}