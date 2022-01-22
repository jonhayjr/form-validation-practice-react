import React from 'react';


const Form = () => {
  return (
      <form action="" className="mt-3 text-center w-50 mx-auto bg-light border-secondary rounded shadow-sm p-5">
          <p className="p-2">Add a product review.</p>
          <div className="mb-3">
            <label htmlFor="product">Product Name:</label>
            <input className="m-2" id="product" name="product" type="text" required />
          </div>
      </form>
  )
};

export default Form;
