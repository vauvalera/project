export default class Card {
  constructor(id, art, name, img, tech, inStock, inFavorite) {
    this.id = id;
    this.art = art;
    this.name = name;
    this.img = img;
    this.tech = tech;
    this.inStock = inStock;
    this.inFavorite = inFavorite;
  }

  setInFavorite(value) {
    this.inFavorite = value;
  }
}
