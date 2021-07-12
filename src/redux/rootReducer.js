import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";

import shoppingReducer from "./shopping/shoppingReducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
  login:loginReducer
});

export default rootReducer;