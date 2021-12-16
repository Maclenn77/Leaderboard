import './style.css';
import * as api from './api';

const leaderBoard = document.querySelector('.leaderboard');
const addScore = document.querySelector('#add-score');
const refreshButton = document.querySelector('#refresh');

async function displayBoard() {
  const leaderList = await api.refresh();
  leaderList.forEach(element => {
    leaderBoard.insertAdjacentHTML('beforeend', `<li class="score-list">${element.user}: ${element.score} </li> `);
  });
};

displayBoard();

addScore.addEventListener('click', async () => {
  const name = document.getElementById('name').value;
  const score = parseInt(document.getElementById('score').value, 10);
  api.submit(name, score);
});

refreshButton.addEventListener('click', () => {
  const children = leaderBoard.childNodes;
  children.forEach((li) => {
    li.remove();
  });
  displayBoard();
})

