function solution(wallpaper) {
    var answer = [];
    const fileLocationX = [];
    const fileLocationY = [];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                fileLocationX.push(i);
                fileLocationY.push(j);
            }
        }
    }
    
    
    answer.push(Math.min(...fileLocationX));
    answer.push(Math.min(...fileLocationY));
    answer.push(Math.max(...fileLocationX) + 1);
    answer.push(Math.max(...fileLocationY) + 1);
    
    return answer;
}