import React from 'react'
import Grocery from "../groceries/grocery_product"
import Header from './Header'
import Menubar from './Menubar'

function GroceryMain() {
  return (
    <div>
      <Header/>
      <Menubar/>
      <Grocery/>
    </div>
  )
}

export default GroceryMain