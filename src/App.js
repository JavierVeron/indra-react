import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Banners from './components/Banners/Banners';
import Error404 from "./components/Error404/Error404";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from "./components/Cart/Cart";
import ContextProvider from './components/CartContext/CartContext';

function App() {
  return (
    <ContextProvider>
      <div className="container-fuid">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path={"/"} element={<ItemListContainer />} />
            <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
            <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route exact path={"/cart"} element={<Cart />} />
            <Route exact path={"/*"} element={<Error404 />} />
          </Routes>
          <Banners />
          <Footer />
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
