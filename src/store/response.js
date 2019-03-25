const element = {
  art: '34534345',
  img: require('../assets/images/scale.png'),
  name: 'Canon PowerShot SX400 IS с улучшенной матрицей и объективом',
  tech: [
    { name: 'Физический размер', value: '23.2 x 15.2 мм' },
    { name: 'Диафрагма', value: 'CMOS' },
    { name: 'Формат записи', value: 'RAW, JPEG, MP4 и другие' },
    { name: 'Фокусное расстояние', value: '18-55 мм.' },
  ],
  inStock: true,
  inFavorite: false,
};

const getItems = () => {
  const items = [];
  for (let i = 0; i <= 2; i++) {
    const item = JSON.parse(JSON.stringify(element));
    item.id = i;
    items.push(item);
  }

  const response = {
    status: 200,
    message: 'ok',
    data: items,
  };

  return JSON.stringify(response);
};

const getItemsByFilter = () => {
  const count = Math.round(1 + Math.random() * 2);
  const items = [];
  for (let i = 0; i < count; i++) {
    const item = JSON.parse(JSON.stringify(element));
    item.id = i;
    items.push(item);
  }

  const response = {
    status: 200,
    message: 'ok',
    data: items,
  };

  return JSON.stringify(response);
};

const setFavorite = card => {
  const response = {
    status: 200,
    message: 'ok',
    data: {
      id: card.getId(),
      favorite: !card.getInFavorite(),
    },
  };

  return JSON.stringify(response);
};

export {
  getItems,
  getItemsByFilter,
  setFavorite,
};
