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
  return (
    <div>
      {results.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};
