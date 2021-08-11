import React from "react";
import { Provider } from "react-redux";
import ConfigureStore from "../src/store/configure_store";
import "./App.css";
import AppRouter from "./routers/app_routers";
function App() {
  const store = ConfigureStore();
  store.subscribe(() => {
    const state = store.getState();
    console.log(state, "store");
  });
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
