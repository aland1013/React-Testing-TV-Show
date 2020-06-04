import axios from 'axios';

export const fetchShow = (showName) => {
  return axios
    .get(
      `https://api.tvmaze.com/singlesearch/shows?q=${showName}&embed=episodes`
    )
    .then((res) => res);
};
