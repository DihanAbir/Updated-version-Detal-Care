import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  AllUserInfo,
  userCreateReducer,
  userDetailsReducer,
  userListReducer,
} from "./Reducer/UserReducers";

// import { productListReducer } from "./reducers/ProductsReducers";

const reducer = combineReducers({
  users: userListReducer,
  addUser: userCreateReducer,
  userDetails: userDetailsReducer,
  AllUserInfo: AllUserInfo,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
