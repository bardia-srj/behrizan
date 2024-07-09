import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/login/Login';
import Products from './pages/Products/Products';
import ProductsItem from './pages/ProductsItems/ProductsItem';
import ProductPage from './pages/ProductPage/ProductPage';
import ComparePage from './pages/ComparePage/CopmarePage';
import FormPage from './pages/FormPage/FormPage';
import { TabProvider } from './Context';
import Header from './components/Header/Header';





export const IP = "https://xrpanel.ariisco.com"
function App() {



  return (
    <>
    
    <TabProvider>
  
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/productsitem' element={<ProductsItem />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/compare' element={<ComparePage />} />
        <Route path='/formpage' element={<FormPage />} />
      </Routes>
    </TabProvider>
    
    </>
  );
}

export default App;
