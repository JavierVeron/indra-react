import './App.css';
import Banners from './components/Banners/Banners';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Ofertas from './components/Ofertas/Ofertas';

function App() {
  return (
    <div className="container-fuid">
      <Header />
      <ItemListContainer greeting="Estamos trabajando para Ud. Se viene el nuevo Sitio de 'El Corte Inglés'." />
      <ItemCount stock={6} initial={1} />
      <Ofertas />
      <Banners />
      <Footer />
    </div>
  );
}

export default App;
