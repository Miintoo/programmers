function solution(todo_list, finished) {
  var answer = [];
  const finishedList = [];

  for (let i = 0; i < finished.length; i++) {
    if (!finished[i]) {
      finishedList.push(i);
    }
  }

  for (let i = 0; i < finishedList.length; i++) {
    const index = finishedList[i];
    answer.push(todo_list[index]);
  }
  return answer;
}