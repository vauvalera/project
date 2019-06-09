import Card from '../classes/Card';

export default {
  addElemToFilter(state, code) {
    state.filter.push(code);
  },

  deleteElemFromFilter(state, code) {
    state.filter = state.filter.filter(item => item !== code);
  },

  clearFilter(state) {
    state.filter = [];
  },

  setItems(state, data) {
    state.cards = data.map(item => {
      const {
        id, art, name, img, tech, inStock, inFavorite,
      } = item;
      return new Card(id, art, name, img, tech, inStock, inFavorite);
    });
  },

  setFavorite(state, data) {
    state.cards.forEach(card => {
      if (card.id === data.id) {
        card.setInFavorite(data.favorite);
      }
    });
  },
};
