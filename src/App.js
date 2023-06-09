import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/cartContext';

// import { getFirestore, getDoc, doc } from 'firebase/firestore';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/category/:categoryId" element= {<ItemListContainer/>} />
          <Route path="/item/:itemId" element= {<ItemDetailContainer/>} />
          <Route path="/cart" element= {<Cart/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>

  );
};

export default App;