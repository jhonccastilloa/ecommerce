import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import cart from "./slices/cart.slice";
const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch