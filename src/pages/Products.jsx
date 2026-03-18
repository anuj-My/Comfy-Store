import { useLoaderData } from "react-router-dom";
import { Filter, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const allProductsQuery = (params) => {
  const { search, category, company, shipping, sort, price, page } = params;
  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      shipping ?? false,
      sort ?? "a-z",
      price ?? 100000,
      page ?? 1,
    ],
    queryFn: () => customFetch.get("/products", { params }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const params = Object.fromEntries(url.searchParams.entries());

    const res = await queryClient.ensureQueryData(allProductsQuery(params));
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
