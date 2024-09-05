import React from "react";
import "../styles/Vegetables.css";

function GroceryProduct() {
  const numOfCards = 5; // Number of cards to render

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < numOfCards; i++) {
      for (let j = 0; j < 5; j++) {
      cards.push(
        <div key={i} className="card-header-1">
          <div className="card-body">
            <div className="card-footer"></div>
          </div>
        </div>
      );
    }
  }
    return cards;
  };

  return (
    <div className="card-container-1">
      {renderCards()}
    </div>
  );
}

export default GroceryProduct;
