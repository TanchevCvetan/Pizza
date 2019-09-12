import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRIZE } from "./types";
import { Seed } from "../components/Seed/Seed";

export const fetchProducts = () => dispatch => {
  return dispatch({
    type: FETCH_PRODUCTS,
    payload: Seed
  });
};

export const sortProducts = (items, sort) => dispatch => {
    const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  return dispatch({
    type: ORDER_PRODUCTS_BY_PRIZE,
    payload: {
      sort: sort,
      items: products
    }
  });
};
