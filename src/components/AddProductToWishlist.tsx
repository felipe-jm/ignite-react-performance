export type AddProductToWishlistProps = {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
};

export const AddProductToWishlist = ({
  onAddToWishlist,
  onRequestClose,
}: AddProductToWishlistProps) => {
  return (
    <>
      <span>Deseja adicionar aos favoritos?</span>
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </>
  );
};
