import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';
import CartContext from './context/CartContext';

export default function App() {
  
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer greeting={"Bienvenido"}/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartContext>      
    </>
  );
};