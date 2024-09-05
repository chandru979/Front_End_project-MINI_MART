import "./App.css";
import Home from "./FunctionalComponent/Home";
import Loginroute from "./FunctionalComponent/loginroute"
import SignUp from "./FunctionalComponent/signup";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
// import Footer from "./FunctionalComponent/Footer";
// import GroceryProduct from "./groceries/grocery_product";
import GroceryMain from "./FunctionalComponent/grocery_main";
import FruitsMain from "./FunctionalComponent/fruits_main";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Footer/>} /> */}
        <Route path="/login" element={<Loginroute />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/groceryProduct" element={<GroceryMain/>}/>
        <Route path="/fruits" element={<FruitsMain/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
