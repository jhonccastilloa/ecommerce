import React, { FormEvent } from "react";
import { InputPrice } from "../../types/types";
import "./style/filterPrice.css";

interface FilterPriceProps {
  setInputPrice: (value: InputPrice) => void;
}
const FilterPrice = ({ setInputPrice }: FilterPriceProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const from = +(e.currentTarget.from as HTMLInputElement).value || 0;
    const to = +(e.currentTarget.to as HTMLInputElement).value || Infinity;
    setInputPrice({
      from,
      to,
    });
    console.log(from);
    console.log(to);
  };
  return (
    <div className="filter__group">
      <h3 className="filter__title-sort">Price</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="from">
            From:
          </label>
          <input className="form__input" type="number" id="from" />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="to">
            To:
          </label>
          <input className="form__input" type="number" id="to" />
        </div>
        <button className="filter__buttons">Filter</button>
      </form>
    </div>
  );
};

export default FilterPrice;
