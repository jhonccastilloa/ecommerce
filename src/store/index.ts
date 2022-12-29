import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
const store = configureStore({
  reducer: {
    products,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch