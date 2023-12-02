function solution(keymap, targets) {
    var answer = [];
    const keymapsHash = {};
    
    // targets 최소 클릭수 해시 생성
    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            const keymapTarget = keymap[i][j];
            if (keymapTarget in keymapsHash) {
                if (keymapsHash[keymapTarget] > j + 1) keymapsHash[keymapTarget] = j + 1;
                else continue;
            } else {
                keymapsHash[keymapTarget] = j + 1;
            }
        }
    }
    
    console.log(keymapsHash);
    
    // 본격적으로 각 keymap 별로 최소길이 구하기
    for (let i = 0; i < targets.length; i++) {
        let count = 0; 
        
        for (let j = 0; j < targets[i].length; j++) {
            const target = targets[i][j];
            if (target in keymapsHash) {
                count += keymapsHash[target];            
            } else {
                count = -1;
                break;
            }
            
        }
        
        answer.push(count);
    }
    
    
    
    
    return answer;
}