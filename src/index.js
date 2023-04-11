import _ from 'lodash';
import './style.css';
import loadScores from './load-scores';

window.addEventListener('load', () => {
  loadScores();
});