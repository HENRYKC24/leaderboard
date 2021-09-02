const errorMessageContainer = document.querySelector('.error-message');

const showMessage = (message) => {
  if (message) {
    errorMessageContainer.textContent = message;
    errorMessageContainer.style.backgroundColor = 'rgb(23, 182, 9)';
    errorMessageContainer.style.color = '#fff';
    setTimeout(() => {
      errorMessageContainer.style.backgroundColor = 'transparent';
      errorMessageContainer.style.color = 'transparent';
    }, 3000);
  }
};

const postData = async () => {
  const nameField = document.querySelector('.name');
  const scoreField = document.querySelector('.score');
  const user = nameField.value;
  const score = scoreField.value;

  if (!score || !user) {
    return 'Fill out the input';
  }

  const scoreObject = {
    user,
    score,
  };

  nameField.value = '';
  scoreField.value = '';
  return (await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hTQZn6X8J86KPjE48QNK/scores/', {
    method: 'POST',
    body: JSON.stringify(scoreObject),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })).json();
};

export default postData;
export { errorMessageContainer, showMessage };