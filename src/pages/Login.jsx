import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { loginUser } from "../features/cart/userSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const res = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(res.data));
      toast.success("Logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please double check you credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginGuestUser = async () => {
    try {
      const guestUser = {
        identifier: "test@test.com",
        password: "secret",
      };
      const res = await customFetch.post("/auth/local", guestUser);
      console.log(res);
      dispatch(loginUser(res.data));
      toast.success("Welcome guest user.");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Guest user login error. please try again.");
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput label="Email" type="email" name="identifier" />
        <FormInput label="Password" type="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          onClick={loginGuestUser}
          type="button"
          className="btn btn-secondary btn-block"
        >
          Guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
