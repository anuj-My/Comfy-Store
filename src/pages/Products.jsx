import { useLoaderData } from "react-router-dom";
import { Filter, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams.entries());

  const res = await customFetch.get("/products", { params });
  const products = res.data.data;
  const meta = res.data.meta;
  return { products, meta, params };
};

const Products = () => {
  const { products } = useLoaderData();
  return (
    <>
      <Filter />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
