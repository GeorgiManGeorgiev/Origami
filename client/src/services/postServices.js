import api from './api';

const getAll = () => fetch(api.posts)
  .then((res) => res.json())
  .catch((err) => console.log(`Handled error ${err}`));

export default {
  getAll
};
