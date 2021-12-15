const gameId = 'RAxHi8yBkg2BqWCgax3x';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + gameId + '/scores/';

export async function refresh(element) {
  const response = await fetch(url);
  const json = await response.json();
  alert(json.result[0].user)
}

export function submit(name, score) {
  fetch(url, {
   method: 'POST',
   body: JSON.stringify({
     user: name,
     score: score,
   }),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
   },
  })
    .then((response) => response.json())
    .then((json) => alert(json.result[1].user));
}