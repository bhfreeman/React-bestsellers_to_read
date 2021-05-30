import axios from "axios";
import apiKey from './apiKey'

const key = 'idGhfFgU1rMo95REQtv3AqSQQtiy5Zn5';

export default {
  getLists: function () {
    return axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${key}`
    );
  },
  getBooks: function (list) {
    return axios.get(
      `https://api.nytimes.com/svc/books/v3/lists.json?list=${list}&api-key=idGhfFgU1rMo95REQtv3AqSQQtiy5Zn5`
    );
  }
};
