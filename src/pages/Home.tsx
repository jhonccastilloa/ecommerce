import React, { ChangeEvent, MouseEvent, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";
import ToOrderProducts from "../components/Home/ToOrderProducts";
import { RootState } from "../store";
import { InputPrice, ShowFilters } from "../types/types";
import "./style/home.css";

const initValuesInputPrice: InputPrice = {
  from: 0,
  to: Infinity,
};

const initValuesShowFIlters: ShowFilters = {
  showFilterOptions: false,
  showFilterSearch: false,
};
const home = () => {
  const { products } = useSelector((state: RootState) => state);
  const [filterValue, setfilterValue] = useState("");
  const [inputPrice, setInputPrice] = useState(initValuesInputPrice);

  const [showFilters, setShowFilters] = useState(initValuesShowFIlters);

  const { showFilterOptions, showFilterSearch } = showFilters;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setfilterValue(value.toLowerCase().trim());
  };

  const handleFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (name == "showFilterOptions") {
      setShowFilters({
        ...showFilters,
        [name]: !showFilters[name as keyof ShowFilters],
        showFilterSearch: false,
      });
    } else {
      setShowFilters({
        ...showFilters,
        [name]: !showFilters[name as keyof ShowFilters],
        showFilterOptions: false,
      });
    }
    
  };

  console.log(showFilters);

  return (
    <section className="section__products container">
      <div className="filters">
        <div className="products__filter">
          <div className="products__filter-category">
            <FilterCategory setfilterValue={setfilterValue} />
          </div>
          <div className="products__filter-more">
            <button
              className={`filter__buttons ${
                showFilterOptions && "filter__buttons--active"
              }`}
              name="showFilterOptions"
              onClick={handleFilter}
            >
              <i className="fa-solid fa-filter"></i> Filter
            </button>
            <button
              className={`filter__buttons ${
                showFilterSearch && "filter__buttons--active"
              }`}
              name="showFilterSearch"
              onClick={handleFilter}
            >
              <i className="fa-solid fa-magnifying-glass"></i> Search
            </button>
          </div>
        </div>
        <div
          className={`filter__options ${
            showFilterOptions && "filter__options--show"
          }`}
        >
          <ToOrderProducts />
          <FilterPrice setInputPrice={setInputPrice} />
        </div>
        <div
          className={`filter__search ${
            showFilterSearch && "filter__search--show"
          }`}
        >
          <input
            className="input__search"
            value={filterValue}
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="products__cards">
        {products.filter(
          ({ price }) => +price >= inputPrice.from && +price <= inputPrice.to
        ).length !== 0 ? (
          products
            .filter(
              ({ price }) =>
                +price >= inputPrice.from && +price <= inputPrice.to
            )
            .filter((product) =>
              product.title.toLowerCase().includes(filterValue)
            )
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))
        ) : (
          <h2>Not exist products to this filter</h2>
        )}
      </div>
    </section>
  );
};

export default home;
