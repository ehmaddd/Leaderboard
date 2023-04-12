const fetchData = async () => {
  const gameKey = 'zSnvHxrSWVy5aoIEh0WJ';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameKey}/scores`;
  const res = await fetch(url, { method: 'GET' });
  const data = await res.json();
  return data;
};

const loadData = () => {
  const result = fetchData();
  result
    .then((response) => {
      const ul = document.querySelector('.score-display ul');
      for (let i = 0; i < response.result.length; i += 1) {
        const li = document.createElement('li');
        li.textContent = `${response.result[i].user} : ${response.result[i].score}`;
        if (i % 2 === 0) {
          li.style.backgroundColor = '#dddddd';
        }
        ul.appendChild(li);
      }
    });
};

module.exports = loadData;