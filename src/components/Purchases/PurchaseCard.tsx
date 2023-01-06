import React from "react";
import { Purchase } from "../../types/types";

interface PurchaseCardProps {
  purchase: Purchase;
}

const PurchaseCard = ({ purchase }: PurchaseCardProps) => {
  console.log(purchase);

  return (
    <div>
      <h3>{new Date(purchase.createdAt).toLocaleDateString()}</h3>
      <div>
        <ul>
          {purchase.cart.products.map((product) => (
            <li key={product.id}>
              <h4>{product.title}</h4>
              <span>{product.productsInCart.quantity}</span>
              <br />
              <span>{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PurchaseCard;
