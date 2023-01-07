import { Purchase } from "../../types/types";
import "./style/purchaseCard.css";
import PurchaseProductList from "./PurchaseProductList";

interface PurchaseCardProps {
  purchase: Purchase;
}
const opciones: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};
const PurchaseCard = ({ purchase }: PurchaseCardProps) => {
  return (
    <div className="purchase__item">
      <h3 className="purchase__date">
        {new Date(purchase.createdAt).toLocaleDateString("en-us", opciones)}
      </h3>
      <ul className="purchase__products-list">
        {purchase.cart.products.map((product) => (
          <PurchaseProductList key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default PurchaseCard;
