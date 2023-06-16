import { Cart, Home, Product, Register, ProductList } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
