/* eslint-disable no-console */
const addScores = () => {
  const gameKey = 'zSnvHxrSWVy5aoIEh0WJ';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameKey}/scores`;
  const playerName = document.querySelector('#player-name').value;
  const playerScore = document.querySelector('#player-score').value;
  const payloadObject = {
    user: `${playerName}`,
    score: `${playerScore}`,
  };

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payloadObject),
  })
    .then((res) => res.json())
    .then(() => { console.log('Data stored successfully'); })
    .catch((error) => console.error(error));
};

module.exports = addScores;