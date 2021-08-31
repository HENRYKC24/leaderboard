const addScore = (scores, showScores) => {
  const nameField = document.querySelector('.name');
  const scoreField = document.querySelector('.score');
  const name = nameField.value;
  const score = scoreField.value;

  const scoreObject = {
    score,
    name,
  };

  if (score && name) {
    scores.push(scoreObject);
    nameField.value = '';
    scoreField.value = '';
  }
  scores.sort((a, b) => a.score - b.score).reverse();
  localStorage.setItem('scores', JSON.stringify(scores));
  showScores(scores);
};

export default addScore;