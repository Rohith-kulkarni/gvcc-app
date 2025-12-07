import { useState } from "react";
import Filters from "../Filters";
import Navbar from "../Navbar";
import Products from "../Products";

const Home = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const totalPages = Math.ceil(productsCount / limit) || 1;

  return (
    <div>
      <Navbar onSearch={setSearch} />
      <h1>Welcome to home</h1>
      <Filters
        productsCount={productsCount}
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        totalPages={totalPages}
        category={category}
        setCategory={setCategory}
      />

      <Products
        setProductsCount={setProductsCount}
        page={page}
        limit={limit}
        search={search}
        category={category}
      />
    </div>
  );
};

export default Home;
