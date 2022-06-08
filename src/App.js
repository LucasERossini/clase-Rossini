import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const onAdd = (count) => {
    alert(`Agregaste ${count} pruducto/s al carrito`);
  };
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido"} /> <br />
      <ItemCount inicial={1} max={10} onAdd={onAdd} />
    </>
  );
}

export default App;
