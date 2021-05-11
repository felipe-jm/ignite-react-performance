type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  };
};

export const ProductItem = ({ product }: ProductItemProps) => (
  <div>
    {product.title} - <strong>{product.price}</strong>
  </div>
);
