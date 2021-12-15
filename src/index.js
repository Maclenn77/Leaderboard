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

addScore.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  api.submit(name, parseInt(score));
});

refreshButton.addEventListener('click', async () => {
  const children = leaderBoard.childNodes;
  children.forEach((li) => {
    li.remove();
  });
  displayBoard();
})

displayBoard();