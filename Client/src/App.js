import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsItem from "./component/ProductsItem";
import { Cart } from './component/Cart';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import NavbarComponent from './NavbarComponent';
import Slider from './component/Slider';
import ProductDetail from './component/ProductDetail';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Login from './component/LoginRegister/Login';
import Register from './component/LoginRegister/Regitster';
function App() {
  const[count,setCount]=useState(0);
  const[total,setTotal]=useState(0);
  
  return (
    <div>
      <Provider store={store}>
        <Router>
          <ToastContainer/>
          <div className="container" style={{ maxWidth: "100%", padding: 0 }}>
            <NavbarComponent Count={count} Total={total}></NavbarComponent>
            <Slider></Slider>
            <Routes>
              <Route exact path='/' element={< ProductsItem Count={count} Total={total} setCount={setCount} setTotal={setTotal}/>}></Route>
              <Route exact path='/cart' element={< Cart Count={count} Total={total} setCount={setCount} setTotal={setTotal} />}></Route>
              <Route exact path='/login' element={<Login/>}></Route>
              <Route exact path='/Register' element={<Register/>}></Route>
              <Route exact path='/products/:id' element={<ProductDetail/>}></Route>
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>


  );
}

export default App;
