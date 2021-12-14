import './style.css';
import * as api from './api';

const leaderBoard = document.querySelector('.leaderboard');
const addScore = document.querySelector('.add-score');
const refreshButton = document.querySelector('#refresh');

function displayBoard() {
  // Display board with data of the API
  leaderBoard.insertAdjacentHTML('beforeend', '<li>Name: Score </li> ');
};

addScore.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  api.submit(name, score);
});

refreshButton.addEventListener('click', () => {
  api.refresh(leaderBoard);
});

displayBoard()