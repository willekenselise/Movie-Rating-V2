import { configureStore } from "@reduxjs/toolkit";
import rayonReducer from "./components/list/FilmSlice";
import panierReducer from "./components/cart/panierSlice";

export default configureStore({
  reducer: {
    rayon: rayonReducer,
    panier: panierReducer,
  },
});
