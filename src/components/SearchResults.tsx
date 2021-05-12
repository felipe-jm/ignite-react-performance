import { useMemo } from "react";

import { ProductItem } from "components/ProductItem";

type Product = {
  id: number;
  price: number;
  title: string;
};

type SearchResultsProps = {
  results: Product[];
};

export const SearchResults = ({ results }: SearchResultsProps) => {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => total + product.price, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};
