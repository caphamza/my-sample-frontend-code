import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from "assets/images/logo.png";
import CartLogo from "assets/images/cartLogo.png";

import { RootState } from "store";

const Navbar = () => {
  const navigate = useNavigate();
  const { workshops } = useSelector((state: RootState) => state.cart);
  return (
    <div className="navbar">
      <div
        onKeyDown={() => navigate("/")}
        role="button"
        tabIndex={0}
        onClick={() => navigate("/")}
      >
        <img className="navbar-logo" alt="Logo" src={Logo} />
      </div>
      <div className="navbar-menu-view">
        <div className="navbar-menu-view-cart">
          <img
            className="navbar-menu-view-cart-logo"
            alt="Cart-Logo"
            src={CartLogo}
          />
          <span
            key={workshops.length}
            className={workshops.length ? "badge" : "badge-none"}
          />
        </div>
        <h6>
          {workshops.length
            ? `${workshops.length} Workshop${
                workshops.length > 1 ? "s" : ""
              } in Cart`
            : "Cart is Empty"}
        </h6>
      </div>
    </div>
  );
};

export default Navbar;
