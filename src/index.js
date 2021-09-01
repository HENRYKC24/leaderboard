import './style.css';
import postData, { showMessage } from './addScore';

let scores = [];

const scoresContainer = document.querySelector('.scores');

const showScores = async () => {
  scoresContainer.innerHTML = '';
  scores.forEach((each) => {
    const li = document.createElement('li');
    li.className = 'item';
    const nameSpan = document.createElement('span');
    nameSpan.className = 'player-name';
    nameSpan.textContent = each.user;

    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'player-score';
    scoreSpan.textContent = each.score;

    li.append(nameSpan, scoreSpan);
    scoresContainer.append(li);
  });
};

const getScores = async (msg) => {
  const getData = async () => (await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hTQZn6X8J86KPjE48QNK/scores/')).json();
  try {
    const data = await getData();
    scores = data.result;
    showMessage(msg);
    scores.sort((a, b) => a.score - b.score).reverse();
    showScores();
  } catch (e) {
    showMessage(e.message);
  }
};

document.querySelector('.submit').addEventListener('click', async () => {
  const message = await postData();
  await getScores(message.result);
});

document.querySelector('.refresh').addEventListener('click', () => {
  getScores('');
});

getScores('');

export default showScores;
