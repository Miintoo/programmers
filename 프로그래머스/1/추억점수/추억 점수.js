function solution(name, yearning, photo) {
    var answer = [];
    const hashMap = {};
    
    for (let i = 0; i < name.length; i++) {
        hashMap[name[i]] = yearning[i];
    }
    
    for (let i = 0; i < photo.length; i++) {
        let count = 0;
        for (let j = 0; j < photo[i].length; j++) {
            if (name.includes(photo[i][j])) {
                count += hashMap[photo[i][j]];
            }
            continue;
        }
        answer.push(count);
    }
    
    return answer;
}