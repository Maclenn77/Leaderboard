const gameId = 'RAxHi8yBkg2BqWCgax3x';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + gameId + '/scores/';

export async function refresh() {
  const response = await fetch(url);
  const json = await response.json();
  return json.result;
}

export async function submit(name, number) {
  const data = {
    user: name, 
    score: number,
  };
  await fetch(url, {
    method: 'POST',
    headers: {
     'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data)
  });
}
