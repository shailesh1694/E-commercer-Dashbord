import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from "./Component/Addproduct";
import Updateproduct from "./Component/Updateproduct";
// import Login from "./Component/Login";
import Register from './Component/Register';
import ProutectedRoute from './Component/ProtectedRoute';
import ProductList from './Component/ProductList';
import Search from './Component/Search';



function App() {
  return (
    <>
    
    <BrowserRouter >
    
    <Routes>

      <Route path='/' element={<Register />} />
    <Route path='/addproduct' element={<ProutectedRoute cmp={AddProduct} />} />
    <Route path='/Updateproduct' element={<ProutectedRoute cmp={Updateproduct}/>} />
    <Route path='/productlist' element={<ProutectedRoute cmp={ProductList}/>} />
    <Route path='/search' element={<ProutectedRoute cmp={Search}/>} />


    {/* <Route path='/login' element={<Login />} /> */}
    <Route path='/Register' element={<Register />} />
    </Routes>
    </BrowserRouter>
    </>

    
    
  );
}

export default App;
