import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Banners from './components/Banners/Banners';
import Error404 from "./components/Error404/Error404";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="container-fuid">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer />} />
          <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
          <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route exact path={"/*"} element={<Error404 />} />
        </Routes>
        <Banners />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
