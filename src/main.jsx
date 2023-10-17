import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FoodContextProvider } from './contexts/FoodContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FoodContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FoodContextProvider>
  </React.StrictMode>,
);
