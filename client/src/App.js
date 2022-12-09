

import './App.css';

import{BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Homes";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Cart from "../src/pages/Cart"
import Addprod from "../src/pages/Addprod"
import Addcat from './pages/Addcat'
import Product from './Components/Product';
import Details from './pages/Details';
import Items from './pages/Items';


function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path="/register" element={<Registration/>}/>
    <Route path="/Cart"  element={<Cart/>}/>
    <Route path="/Addprod" element={<Addprod/>}/>
    <Route path="/Addcat" element={<Addcat/>}/>
    <Route path="/Details" element={<Details/>}/>
    <Route path="/Items" element={<Items/>}/>
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
