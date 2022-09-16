import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductsList from './components/ProductsList/index';
import ProductDetails from './components/ProductDetails/index';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductsList/>}/>
      <Route path="/product/:productId" element={<ProductDetails/>}/>
      <Route>404 Not Found!</Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
