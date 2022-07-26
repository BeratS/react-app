import { useDeferredValue } from 'react';

function ProductList({ products }: { products: string[]}) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product: string) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;