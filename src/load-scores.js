const loadScores = () => {
  const ul = document.querySelector('.score-display ul');
  for (let i=1; i <= 10; i += 1) {
    const li = document.createElement('li');
    const rand = Math.floor(Math.random()*100);
    li.textContent = `Name : ${rand}`;
    if ( i%2 == 0) {
      li.style.backgroundColor = '#dddddd';
    }
    ul.appendChild(li);
  }
}

module.exports = loadScores;