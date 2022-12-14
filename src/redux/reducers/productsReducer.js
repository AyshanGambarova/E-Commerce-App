import { ActionTypes } from "../contants/action-type";

const initialState = {
  products: [],
};
export const productsReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state,products:payload};
    default:
      return state;
  }
};
export const selectedProductReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {...state,...payload};
    default:
      return state;
  }
};
