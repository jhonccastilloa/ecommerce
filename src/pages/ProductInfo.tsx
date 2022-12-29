import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product, ProductID } from "../types/types";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductDescription from "../components/ProductInfo/ProductDescription";
import { RootState } from "../store";
import CardProduct from "../components/Home/CardProduct";

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductID | null>(null);
  const [similar, setSimilar] = useState<Product[] | null>(null);

  const allProducts = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (allProducts && product) {
      const pivot = allProducts.filter(
        (prod) =>
          prod.category.name === product.category && prod.id !== product.id
      );
      setSimilar(pivot);
    }
  }, [allProducts, product]);
  useEffect(() => {
    getData();
  }, [id]);
  console.log(similar);

  const getData = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  };

  console.log(product);

  return (
    <div>
      {product && <ProductDescription product={product} />}
      <section>
        <h2>Discover similar items</h2>
        <div>
          {similar?.map((sim) => (
            <CardProduct key={sim.id} product={sim} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
