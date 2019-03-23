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
        id, art, img, tech, inStock, inFavorite,
      } = item;
      return new Card(id, art, img, tech, inStock, inFavorite);
    });
  },

  setFavorite(state, data) {
    state.cards.forEach(card => {
      if (card.getId() === data.id) {
        card.setInFavorite(data.favorite);
      }
    });
  },
};
