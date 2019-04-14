class ScoresStorage {
  constructor(initData, storageName) {
    this.scores = [];
    this.initData = [];
    this.storageName = storageName;
    Object.assign(this.initData, initData);
    this.setInitData();
  }

  setInitData() {
    this.changeIndex = null;
    this.storageData = JSON.parse(localStorage.getItem(this.storageName));

    if (this.storageData === null) {
      Object.assign(this.scores, this.initData);
    } else {
      Object.assign(this.scores, this.storageData);
    }
  }

  setScore(score) {
    this.changeIndex = null;
    this.scores.some((value, index) => {
      if (value < score) {
        this.scores.splice(index, 0, score);
        this.scores.pop();
        this.changeIndex = index;
        return true;
      }
    });
    localStorage.setItem(this.storageName, JSON.stringify(this.scores));  
  }

  getChangeIndex() {
    return this.changeIndex;
  }

  getScores() {
    return this.scores;
  }

  clearScores() {
    localStorage.clear();
    this.setInitData();
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const INIT_DATA = [11, 8, 5, 3, 0];
  const STRAGE_NAME = 'scores';
  const scoresStorage = new ScoresStorage(INIT_DATA, STRAGE_NAME);
  const inputScore = document.getElementById("inputScore");

  document.getElementById('setScore').addEventListener('click', () => {
    scoresStorage.setScore(Number(inputScore.value));
    refreshDisplay(scoresStorage, scoresStorage.getChangeIndex());
  });

  document.getElementById('clearScore').addEventListener('click', () => {
    scoresStorage.clearScores();
    scoresStorage.getScores().forEach((value, index) => {
      document.getElementById(`scoreValue${index}`).innerHTML = value;
    });
    
    initialize(scoresStorage.getScores());
  });

  initialize(scoresStorage.getScores());
}, false);


function refreshDisplay(scoresStorage, changeIndex) {
  if (changeIndex !== null) {
    document.querySelectorAll('li').forEach(element => {
      element.classList.remove('changeText');
    });
    document.getElementById(`score${changeIndex}`).classList.add('changeText');

    scoresStorage.getScores().forEach((value, index) => {
      document.getElementById(`scoreValue${index}`).innerHTML = value;
    });
  }
}

function initialize(scoreValues) {
  const scores = document.getElementById('scores');
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