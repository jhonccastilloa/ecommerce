import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { getProducstThunks, getProductsByCategory } from "../../store/slices/products.slice";
import { Category } from "../../types/types";

const FilterCategory = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`;
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  console.log(categories);
  const handleClick = (id: number) => {
    dispatch(getProductsByCategory(id));
  };

  const handleAllProduct=()=>{
    dispatch(getProducstThunks())
  }
  return (
    <div>
      <h3>Categories</h3>
      <ul>
        <li onClick={handleAllProduct}>All Product</li>
        {categories?.map((category) => (
          <li onClick={() => handleClick(category.id)} key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory;
