function solution(ingredient) {
    var answer = 0;
    const stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        const currentIndex = stack.length - 1;
        
        if (ingredient[i] === 1 && stack.length >= 4) {
            if (stack[currentIndex - 1] === 3 && stack[currentIndex - 2] === 2 && stack[currentIndex - 3] === 1) {
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                
                answer += 1;
            } 
        }
    }
    return answer;
}