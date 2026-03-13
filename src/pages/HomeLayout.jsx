import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
