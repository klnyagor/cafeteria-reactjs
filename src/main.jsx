import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FoodContextProvider } from './contexts/FoodContext.jsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FoodContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </FoodContextProvider>
  </React.StrictMode>,
);
