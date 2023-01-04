import React, { FormEvent } from "react";

const FilterPrice = () => {
  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const from=(e.currentTarget.from  as HTMLInputElement).value
    const to=(e.currentTarget.to  as HTMLInputElement).value

    console.log(from);
    console.log(to);
    
  }
  return (
    <div>
      <h2>Price</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from">From</label>
          <input type="number" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input type="number" id="to" />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default FilterPrice;
