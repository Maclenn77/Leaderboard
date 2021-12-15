const gameId = 'RAxHi8yBkg2BqWCgax3x';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + gameId + '/scores/';

export async function refresh(element) {
  const response = await fetch(url);
  const json = await response.json();
  alert(json.result[0].user)
}

export async function submit(name, score) {
  const newScore = {user: name, score: parseInt(score)};
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newScore),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const responseText = await response.text();
  console.log(responseText);
}