export function getTransactions(next) {
  const url = 'https://tranquil-bastion-52140.herokuapp.com/api/transactions';
  return fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(next);
}

export function createTransaction(data) {
  const url = 'https://tranquil-bastion-52140.herokuapp.com/api/transactions';
  console.log(JSON.stringify(data));
  return fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}