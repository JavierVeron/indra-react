import './App.css';
import Banners from './components/Banners/Banners';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Ofertas from './components/Ofertas/Ofertas';

function App() {
  return (
    <div className="container-fuid">
      <Header />
      <ItemListContainer />
      <ItemDetailContainer />
      <Ofertas />
      <Banners />
      <Footer />
    </div>
  );
}

export default App;
