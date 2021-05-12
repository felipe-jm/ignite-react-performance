import { memo } from "react";

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
}: ProductItemProps) => (
  <div>
    {product.title} - <strong>{product.priceFormatted}</strong>
    <button onClick={() => onAddToWishlist(product.id)}>Add to wishlist</button>
  </div>
);

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps);
  }
);
