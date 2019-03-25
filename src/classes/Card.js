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

  getId() {
    return this.id;
  }

  getArt() {
    return this.art;
  }

  getName() {
    return this.name;
  }

  getImage() {
    return this.img;
  }

  getTech() {
    return this.tech;
  }

  getInStock() {
    return this.inStock;
  }

  getInFavorite() {
    return this.inFavorite;
  }

  setInFavorite(value) {
    this.inFavorite = value;
  }
}
