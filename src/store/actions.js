const axios = require('axios');
const { getItems, getItemsByFilter, setFavorite } = require('./response');

export default {
  getItems(store) {
    const { filter } = store.state;

    axios.get('/items', {
      params: filter,
    })
      .then(response => {
        // console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    setTimeout(() => {
      if (!filter.length) {
        const response = JSON.parse(getItems());
			  if (response.status === 200) {
          store.commit('setItems', response.data);
        }
        return;
      }

      const response = JSON.parse(getItemsByFilter());
      if (response.status === 200) {
        store.commit('setItems', response.data);
      }
    }, 1000);
  },

  setFavorite(store, card) {
    const id = card.id;
    if (id < 0) {
      return;
    }

    axios.get(`/item/favorite/${id}/`)
      .then(response => {
        // console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    setTimeout(() => {
      const response = JSON.parse(setFavorite(card));
      if (response.status === 200) {
        store.commit('setFavorite', response.data);
      }
    }, 1000);
  },
};
