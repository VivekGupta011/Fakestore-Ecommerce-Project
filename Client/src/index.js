import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductsItem from './component/ProductsItem';
import { Cart } from './component/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

