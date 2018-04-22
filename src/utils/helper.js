export function getTransactions(next) {
  const url = 'https://tranquil-bastion-52140.herokuapp.com/api/transactions';
  fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(next);
}