import  { CartProvider } from './context/GlobalStateContext';
import { Rutas } from './routes/Rutas';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Rutas />
      </CartProvider>
    </div>
  );
}

export default App;
