import { List, ListRowRenderer } from "react-virtualized";

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem product={results[index]} onAddToWishlist={onAddToWishlist} />
    </div>
  );

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};
