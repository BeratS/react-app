import { useState, useTransition } from 'react';

import { generateProducts } from './data';
import ProductList from './Product';


const dummyProducts = generateProducts();

function filterProducts(filterTerm: string | undefined) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function Products() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: React.ChangeEvent<HTMLInputElement>) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
    // setFilterTerm(event.target.value);
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p style={{color: 'white'}}>Updating List...</p>}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Products;