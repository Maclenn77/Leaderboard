import './style.css';
import * as api from './api.js';

const leaderBoard = document.querySelector('.list-group');
const addScore = document.querySelector('#add-score');
const refreshButton = document.querySelector('#refresh');

async function displayBoard() {
  const leaderList = await api.refresh();
  leaderList.forEach((element) => {
    if (leaderList.indexOf(element) % 2 !== 0) {
      leaderBoard.insertAdjacentHTML('beforeend', `<li class="list-group-item d-flex justify-content-between align-items-center text-muted">${element.user}:  <span class="badge badge-pill badge-danger text-dark"> ${element.score} </span> </li> `);
    } else {
      leaderBoard.insertAdjacentHTML('beforeend', `<li class="list-group-item d-flex justify-content-between align-items-center bg-light text-dark">${element.user}:  <span class="badge badge-pill badge-danger text-dark"> ${element.score} </span> </li> `);
    }
  });
}

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
});