const API_URL = 'https://pokeapi.co/api/v2';

export const doGetRequest = path => {
  const url = API_URL + path;
  return fetch(url).then(response => response.json());
};
