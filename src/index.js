import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import myStore, { persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import ScrollTop from './components/ScrollTop/ScrollTop'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ScrollTop />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
