import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import {
  getProducstThunks,
  getProductsByCategory,
} from "../../store/slices/products.slice";
import { Category } from "../../types/types";
import "./style/filterCategory.css";

interface FilterCategoryProps {
  setfilterValue: (value: string) => void;
}

const FilterCategory = ({ setfilterValue }: FilterCategoryProps) => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [idCategory, setIdCategory] = useState(0);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`;
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id: number) => {
    setIdCategory(id);
    dispatch(getProductsByCategory(id));
    setfilterValue("");
  };

  const handleAllProduct = () => {
    dispatch(getProducstThunks());
    setIdCategory(0);
    setfilterValue("");
  };
  console.log(idCategory);

  return (
    <ul className="category__list">
      <li
        className={` category__item ${
          idCategory == 0 && "category__item--active"
        }`}
        onClick={handleAllProduct}
      >
        All Product
      </li>
      {categories?.map((category) => (
        <li
          className={` category__item ${
            idCategory == category.id && "category__item--active"
          }`}
          onClick={() => handleClick(category.id)}
          key={category.id}
        >
          <span>{category.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default FilterCategory;
