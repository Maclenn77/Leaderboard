const url = new URL('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RAxHi8yBkg2BqWCgax3x/scores/');

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
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Access-Control-Allow-Methods': 'POST; GET',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  }).catch((error) => console.log(error.message));
  return response;
}
