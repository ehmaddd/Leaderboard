const clearScores = () => {
  const ul = document.querySelector('.score-display ul');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};

module.exports = clearScores;