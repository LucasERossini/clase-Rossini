//@ts-check
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';
import CartContext from './context/CartContext';
import Checkout from './components/Checkout';
import { initializeApp } from "firebase/app";

export default function App() {
  initializeApp({
    apiKey: "AIzaSyD_0elLt2oDMVPi9iPNfou5EcWZQYfctf4",
    authDomain: "curso-react-8ed77.firebaseapp.com",
    projectId: "curso-react-8ed77",
    storageBucket: "curso-react-8ed77.appspot.com",
    messagingSenderId: "471616600905",
    appId: "1:471616600905:web:be04798dbbc791bca03898"
  });

  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartContext>      
    </>
  );
};