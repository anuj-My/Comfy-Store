import { useLoaderData } from "react-router-dom";
import { Filter, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async () => {
  const res = await customFetch.get("/products");
  const products = res.data.data;
  const meta = res.data.meta;
  return { products, meta };
};

const Products = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <>
      <Filter />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
