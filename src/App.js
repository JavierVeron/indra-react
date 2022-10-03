import './App.css';
import Banners from './components/Banners/Banners';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Ofertas from './components/Ofertas/Ofertas';

function App() {
  return (
    <div className="container-fuid">
      <Header />
      <Ofertas />
      <Banners />
      <Footer />
    </div>
  );
}

export default App;
