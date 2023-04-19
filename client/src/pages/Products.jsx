import { useNavigate } from "react-router-dom";

import ProductCard from "../components/products/ProductCard";

import Filter from "../components/products/Filter";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="fw-bold">Products</h1>
      <br />
      <Filter />
      <br />
      <div className="row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
