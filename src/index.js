import './style.css';
import loadData from './load-scores.js';
import addScores from './add-scores.js';
import clearScores from './clear-scores.js';

window.addEventListener('load', () => {
  loadData();
});

document.querySelector('.refresh').addEventListener('click', () => {
  clearScores();
  loadData();
});

document.querySelector('#submitButton').addEventListener('click', () => {
  addScores();
});