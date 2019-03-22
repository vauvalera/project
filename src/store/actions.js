const axios = require('axios');

export default {
  getItems(store) {
    const { filter } = store.state;
    if (!filter.length) {
      return;
    }

    axios.get('/items', {
      params: filter,
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  },
};
