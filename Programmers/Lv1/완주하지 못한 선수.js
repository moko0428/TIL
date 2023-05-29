function solution(participant, completion) {
  let failPalyer = [];

  completion[completion.length] = "";
  //배열의 마지막 요소에 '' 빈 문자열 추가

  const participantSort = participant.sort();
  const completionSort = completion.sort();

  for (let i = 0; i < participantSort.length; i++) {
    if (participantSort[i] !== completionSort[i]) arr = participantSort[i];
  }
  return failPalyer;
}
