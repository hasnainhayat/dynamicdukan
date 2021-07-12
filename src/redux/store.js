import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

export default store;