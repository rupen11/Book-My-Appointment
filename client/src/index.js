import React, { StrictMode } from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import store from './store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
