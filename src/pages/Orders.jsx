import { redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { AdvancedPagination, OrderList, SectionTitle } from "../components";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      setTimeout(
        () => toast.warn("You must logged in to view the orders"),
        100,
      );

      return redirect("/login");
    }

    const searchParams = new URL(request.url).searchParams;
    const params = Object.fromEntries(searchParams.entries());

    try {
      const res = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: res.data.data, meta: res.data.meta };
    } catch (err) {
      const errorMessage =
        err?.response?.data?.error?.message ||
        "There was an error getting orders";
      toast.error(errorMessage);
      if (error.response.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
const Orders = () => {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }

  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrderList />
      <AdvancedPagination />
    </>
  );
};

export default Orders;
