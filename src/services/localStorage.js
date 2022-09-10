const FAVORITE = 'cart_items';
if (!JSON.parse(localStorage.getItem(FAVORITE))) {
  localStorage.setItem(FAVORITE, JSON.stringify([]));
}

const readFavorite = () => JSON.parse(localStorage.getItem(FAVORITE));

const saveFavorite = (favorite) => localStorage
  .setItem(FAVORITE, JSON.stringify(favorite));

const addProduct = (product) => {
  if (product) {
    const favorite = readFavorite();
    saveFavorite([...favorite, product]);
  }
};
export default addProduct;
