import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/containers/ItemDetailContainer';

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenido"}/>}/>
          <Route path="/category/:id" element={<ItemListContainer greeting={"Bienvenido"}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>      
    </>
  );
}