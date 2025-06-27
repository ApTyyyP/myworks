import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Product from '../pages/products/Product';
import ProductsList from '../pages/products/ProductsList';
import Terms from '../pages/Terms';
import Contacts from '../pages/Contacts';
import Page404 from '../pages/Page404';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contacts" element={<Contacts />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
