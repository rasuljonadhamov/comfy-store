// import { useSelector } from "react-redux"; // Only if using Redux
import { FaRegMoon, FaShoppingCart } from "react-icons/fa";
import { RxSun } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";

import { Link, Outlet } from "react-router-dom";

const Header = ({ isDarkMode, currentUser, setIsDarkMode }) => {
  //   const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Accessing user state (optional)

  return (
    <header className="bg-gray-800 mx-auto text-white py-4 ">
      <div className="wrap">
        <div className={isDarkMode ? "auth-wrapper dark-mode" : "auth-wrapper"}>
          {currentUser ? (
            <Link className={isDarkMode ? "links dark-mode" : "links"}>
              SIGN OUT
            </Link>
          ) : (
            <Link
              to="/auth"
              className={isDarkMode ? "links dark-mode" : "links"}
            >
              SIGN IN
            </Link>
          )}
          <Link to="/" className={isDarkMode ? "links dark-mode" : "links"}>
            Guest
          </Link>
          <Link to="/auth" className={isDarkMode ? "links dark-mode" : "links"}>
            Create Account
          </Link>
        </div>
        <div className="navbar-container flex justify-between">
          <div className={isDarkMode ? "Navbar dark-mode" : "Navbar"}>
            <Link to="/" className={isDarkMode ? "Logo dark-mode" : "Logo"}>
              C
            </Link>
            <nav>
              <Link
                className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
                to="/"
              >
                Home
              </Link>
              <Link
                className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
                to="/about"
              >
                About
              </Link>
              <Link
                className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
                to="/products"
              >
                Products
              </Link>
              <Link
                className={isDarkMode ? "NavLink dark-mode" : "NavLink"}
                to="/cart"
              >
                Cart
              </Link>
            </nav>
            <div className="right-side">
              {isDarkMode ? (
                <RxSun
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  color={isDarkMode ? "white" : "currentColor"}
                />
              ) : (
                <FaRegMoon
                  color={isDarkMode ? "white" : "currentColor"}
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  isDarkMode={isDarkMode}
                />
              )}
              <Link to="/cart" className="cart-icon">
                {isDarkMode ? (
                  <FaCartShopping
                    color={isDarkMode ? "white" : "currentColor"}
                  />
                ) : (
                  <FaShoppingCart
                    color={isDarkMode ? "white" : "currentColor"}
                  />
                )}
                <span className="cart-count">{0}</span>
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </header>
  );
};

export default Header;
