import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navegacion from './components/Navbar/Navegacion';


function App() {
  return (
    <div className="App">
      <Navegacion/>
      <ItemListContainer title={"VENDO ALGO"} description={"ALGUNA COSA NOSE"} active/>
    </div>
  );
}

export default App;
