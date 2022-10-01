import Logo from "assets/images/logo.png";
import CartLogo from "assets/images/cartLogo.png";

export default function navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" alt="Logo" src={Logo} />
      <div className="navbar-menuView">
        <img
          className="navbar-menuView-cart-logo"
          alt="Cart-Logo"
          src={CartLogo}
        />
        <h6>Cart is empty</h6>
      </div>
    </div>
  );
}
