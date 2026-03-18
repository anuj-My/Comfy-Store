import { useLoaderData } from "react-router-dom";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils/index";

const url = "/products?featured=true";

const featuredProductQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch.get(url),
};

export const loader = (queryClient) => async () => {
  const res = await queryClient.ensureQueryData(featuredProductQuery);
  const products = res.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
