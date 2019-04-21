import ScoresStorage from './ScoresStorage';

document.addEventListener('DOMContentLoaded', () => {
  const INIT_DATA: number[] = [11, 8, 5, 3, 0];
  const STRAGE_NAME: string = 'scores';
  const scoresStorage = new ScoresStorage(INIT_DATA, STRAGE_NAME);
  const inputScoreInput = document.getElementById('inputScore') as HTMLInputElement;
  const setScoreButton = document.getElementById('setScore') as HTMLButtonElement;
  const clearScoreButton = document.getElementById('clearScore') as HTMLButtonElement;

  setScoreButton.addEventListener('click', () => {
    scoresStorage.setScore(Number(inputScoreInput.value));
    refreshDisplay(scoresStorage, scoresStorage.getChangeIndex());
  });

  clearScoreButton.addEventListener('click', () => {
    scoresStorage.clearScores();
    scoresStorage.getScores().forEach((value, index) => {
      (document.getElementById(`scoreValue${index}`) as HTMLSpanElement).innerHTML = String(value);
    });

    initialize(scoresStorage.getScores());
  });

  initialize(scoresStorage.getScores());
});


function refreshDisplay(scoresStorage: ScoresStorage, changeIndex: number | null) {
  if (changeIndex !== null) {
    document.querySelectorAll('li').forEach((element) => {
      element.classList.remove('changeText');
    });
    (document.getElementById(`score${changeIndex}`) as HTMLLIElement).classList.add('changeText');

    scoresStorage.getScores().forEach((value, index) => {
      (document.getElementById(`scoreValue${index}`) as HTMLSpanElement).innerHTML = String(value);
    });
  }
}

function initialize(scoreValues: number[]) {
  const scores = document.getElementById('scores') as HTMLSpanElement;
  scores.innerHTML = '';

  scoreValues.forEach((value, index) => {
    scores.innerHTML += `
      <li class="score" id="score${index}">
        ${index + 1}位：
        <span id="scoreValue${index}">${value}</span>
        点
      </li>
    `;
  });
}
