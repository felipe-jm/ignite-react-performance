import { memo } from "react";

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  };
};

// shallow compare - comparação rasa
// {} === {} // false
// Referential equality - Igualdade referencial

const ProductItemComponent = ({ product }: ProductItemProps) => (
  <div>
    {product.title} - <strong>{product.price}</strong>
  </div>
);

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps);
  }
);
