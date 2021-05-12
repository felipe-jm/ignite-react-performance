import { ProductItem } from "components/ProductItem";

type Product = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
};

type SearchResultsProps = {
  totalPrice: number;
  results: Product[];
  onAddToWishlist: (id: number) => void;
};

export const SearchResults = ({
  totalPrice,
  results,
  onAddToWishlist,
}: SearchResultsProps) => {
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
