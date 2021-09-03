import './style.css';
import postData, { showMessage } from './addScore';

let scores = [];

const scoresContainer = document.querySelector('.scores');

let topScore = 0;

const showScores = () => {
  scoresContainer.innerHTML = '';
  scores.forEach((each, ind) => {
    const li = document.createElement('li');
    li.className = 'item';
    const nameSpan = document.createElement('span');
    nameSpan.className = 'player-name';
    nameSpan.textContent = each.user;

    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'player-score';
    scoreSpan.textContent = each.score;

    const topSpan = document.createElement('i');
    topSpan.classList.add('fas', 'fa-trophy-alt');

    if (ind === 0) {
      topScore = each.score;
      li.classList.add('top-score');
    }

    if (ind === 0) {
      topScore = each.score;
      li.classList.add('top-score');
    }

    if (ind === 0) {
      topScore = each.score;
      li.classList.add('top-score');
    }

    li.append(nameSpan, (ind === 0 && topSpan) || '', scoreSpan);

    if (ind > 0 && (each.score === topScore)) {
      li.insertBefore(topSpan, li.firstElementChild.nextElementSibling);
      li.classList.add('top-score');
    }

    scoresContainer.append(li);
  });
};

const getScores = async (msg) => {
  const getData = async () => (await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hTQZn6X8J86KPjE48QNK/scores/')).json();
  try {
    const data = await getData();
    scores = data.result;
    scores.sort((a, b) => a.score - b.score).reverse();
    showScores();
    showMessage(msg, '#228b22');
  } catch (e) {
    showMessage(e.message);
  }
};

document.querySelector('.submit').addEventListener('click', async () => {
  const message = await postData();
  await getScores(message.result);
});

document.querySelector('.refresh').addEventListener('click', async () => {
  await getScores('');
});

document.querySelector('.refresh').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate');
});

getScores('');

export default showScores;
