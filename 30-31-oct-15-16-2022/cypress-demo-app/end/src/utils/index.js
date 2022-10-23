import {NEWS_API_ENDPOINT, API_KEY} from "../constants";

const getHeadlines = (countryCode, searchedText, cb) => {
  const url = `${NEWS_API_ENDPOINT}?country=${countryCode}&q=${searchedText}&apiKey=${API_KEY}`;
  const req = new Request(url);
  fetch(req)
    .then((response) => response.json())
    .then((data) => {
      cb(data);
    });
};

export default getHeadlines;
