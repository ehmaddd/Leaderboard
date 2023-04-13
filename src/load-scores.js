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
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        div1.textContent = `${response.result[i].user}`;
        div1.classList.add('li-div-1');
        div2.classList.add('li-div-2');
        div2.textContent = `${response.result[i].score}`;
        li.appendChild(div1);
        li.appendChild(div2);
        ul.appendChild(li);
      }
    });
};

module.exports = loadData;