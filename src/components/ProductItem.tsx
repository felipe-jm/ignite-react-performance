import { memo, useState } from "react";
import dynamic from "next/dynamic";

import lodash from "lodash";

import { AddProductToWishlistProps } from "components/AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () =>
    import("./AddProductToWishlist").then((mod) => mod.AddProductToWishlist),
  {
    loading: () => <span>Carregando...</span>,
  }
);

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
};

// shallow compare - comparação rasa
// {} === {} // false
// Referential equality - Igualdade referencial

const ProductItemComponent = ({
  product,
  onAddToWishlist,
}: ProductItemProps) => {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
};

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps, nextProps);
  }
);
