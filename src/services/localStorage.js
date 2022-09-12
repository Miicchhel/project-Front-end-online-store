const FAVORITE = 'cart_items';
if (!JSON.parse(localStorage.getItem(FAVORITE))) {
  localStorage.setItem(FAVORITE, JSON.stringify([]));
}

const readFavorite = () => JSON.parse(localStorage.getItem(FAVORITE));

const saveFavorite = (favorite) => localStorage
  .setItem(FAVORITE, JSON.stringify(favorite));

const addProduct = (product) => {
  const favorite = readFavorite();
  // console.log(favorite);
  if (favorite.length === 0) {
    saveFavorite([...favorite, product]);
  } else if (favorite.some((item) => item.id === product.id)) {
    for (let index = 0; index < favorite.length; index += 1) {
      if (favorite[index].id === product.id) {
        const copyItem = favorite[index];
        favorite.splice(index, 1);
        copyItem.quantity += 1;
        saveFavorite([...favorite, copyItem]);
      }
    }
  } else {
    saveFavorite([...favorite, product]);
  }
};

export default addProduct;
