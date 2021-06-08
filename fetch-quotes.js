import fetch from 'node-fetch';

export default async function getQuotes() {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())
    .then(data => ({
      name: data[0].character,
      text: data[0].quote,
      image: data[0].image
    }));
}
