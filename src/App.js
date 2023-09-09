import Login from "./pages/Login";
import Home  from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Explore from "./components/EXPLORE/Explore";
import "./style.scss"


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Success from "./pages/Success";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/login/" element={<Login/>}/>
        <Route path="/register/" element={<Register/>}/>
        <Route path="/explore/" element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/login/">
          // {/* {user ? <Redirect to="/"/> :<Login/>} */}
          // <Login/>
        // </Route>
        // <Route path="/register">
          // {/* {user ? <Redirect to="/"/> :<Register/>} */}
          // <Register/>
        // </Route>
        // </Switch> */}