import React from "react";
import CardComponent from "../../UI/CardComponent";

const Products = () => {
  const cards = new Array(30).fill(0); // Create an array to loop 9 times

  return (
    <div className="row g-2">
      {cards.map((_, index) => (
        <div className="col-lg-4 col-xxl-3" key={index}>
          <CardComponent />
        </div>
      ))}
    </div>
  );
};

export default Products;
