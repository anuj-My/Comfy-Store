import { useLoaderData } from "react-router-dom";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils/index";

const url = "/products?featured=true";
export const loader = async () => {
  const res = await customFetch.get(url);
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
