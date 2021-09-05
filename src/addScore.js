const errorMessageContainer = document.querySelector('.error-message');

const showMessage = (message, backgroundColor) => {
  if (message) {
    errorMessageContainer.textContent = message;
    errorMessageContainer.style.backgroundColor = backgroundColor;
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
  const { value: user } = nameField;
  const { value: score } = scoreField;

  if (!score || !user) {
    showMessage('Please, fill out all the fields.', '#f33');
    return false;
  }

  const scoreObject = {
    user,
    score,
  };

  nameField.value = '';
  scoreField.value = '';

  try {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hTQZn6X8J86KPjE48QNK/scores/';
    const message = (await fetch(url, {
      method: 'POST',
      body: JSON.stringify(scoreObject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })).json();
    return message;
  } catch (e) {
    return { result: e };
  }
};

export default postData;
export { errorMessageContainer, showMessage };