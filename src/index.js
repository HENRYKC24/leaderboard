import './style.css';
import addScore from './addScore';

let scores = [];

if (localStorage.scores) {
  scores = JSON.parse(localStorage.getItem('scores'));
}

const scoresContainer = document.querySelector('.scores');

const showScores = (scores) => {
  scoresContainer.innerHTML = '';
  scores.forEach((each) => {
    const li = document.createElement('li');
    li.className = 'item';
    const nameSpan = document.createElement('span');
    nameSpan.className = 'player-name';
    nameSpan.textContent = each.name;

    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'player-score';
    scoreSpan.textContent = each.score;

    li.append(nameSpan, scoreSpan);
    scoresContainer.append(li);
  });
};

showScores(scores);
document.querySelector('.submit').addEventListener('click', () => addScore(scores, showScores));

export default showScores;
