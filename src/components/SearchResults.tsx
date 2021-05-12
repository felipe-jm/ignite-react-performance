import { useMemo } from "react";

import { ProductItem } from "components/ProductItem";

type Product = {
  id: number;
  price: number;
  title: string;
};

type SearchResultsProps = {
  results: Product[];
  onAddToWishlist: (id: number) => void;
};

export const SearchResults = ({
  results,
  onAddToWishlist,
}: SearchResultsProps) => {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => total + product.price, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
};
