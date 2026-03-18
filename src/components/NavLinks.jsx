import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];
const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  const navLinkList = links.map((item) => {
    const { id, url, text } = item;
    if ((url === "checkout" || url === "orders") && !user) return;
    return (
      <li key={id}>
        <NavLink to={url} className="capitalize">
          {text}
        </NavLink>
      </li>
    );
  });

  return <>{navLinkList}</>;
};

export default NavLinks;
