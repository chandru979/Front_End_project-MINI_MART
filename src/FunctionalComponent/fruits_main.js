import React from "react";
import Header from "./Header";
import Menubar from "./Menubar";
import FruitsProducts from "../groceries/fruits_products";

function FruitsMain() {
  return (
    <div>
      <Header />
      <Menubar />
      <FruitsProducts/>
    </div>
  );
}

export default FruitsMain;
