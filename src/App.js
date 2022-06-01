import './App.css';
import ItemListContainer from './components/ItemListContainer';
import MUINavBar from './components/MUINavBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <MUINavBar/>
      <ItemListContainer greeting={"Bienvenido"}/>
    </>
  );
}

export default App;
