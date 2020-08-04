import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import userReducer from "./store/reducers/users";
import Routes from "./Routes";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
