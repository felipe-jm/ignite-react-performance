import { FormEvent, useCallback, useState } from "react";

import { SearchResults } from "components/SearchResults";

type Product = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
};

type Results = {
  totalPrice: number;
  data: Product[];
};

const Home = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product) => ({
      ...product,
      priceFormatted: formatter.format(product.price),
    }));

    const totalPrice = data.reduce(
      (total, product) => total + product.price,
      0
    );

    setResults({ totalPrice, data: products });
  }

  const addToWishlist = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishlist={addToWishlist}
      />
    </div>
  );
};

export default Home;
