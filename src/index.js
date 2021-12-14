import _ from 'lodash';
import './style.css';

const leaderBoard = document.querySelector('.leaderboard');


function component() {
    const score = document.createElement('li')
  
   // Lodash, now imported by this script
    score.innerHTML = _.join(['Hello', 'webpack'], ' ');
    score.classList.add('hello');
  
    return score;
  }
  

leaderBoard.insertAdjacentHTML('beforeend', `<li class='test border border-dark'>Name: Score </li> `)
leaderBoard.insertAdjacentHTML('beforeend', `<li class='test border border-dark'>Name: Score </li> `)
leaderBoard.insertAdjacentHTML('beforeend', `<li class='test border border-dark'>Name: Score </li> `)
leaderBoard.insertAdjacentHTML('beforeend', `<li class='test border border-dark'>Name: Score </li> `)