import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle, Form } from "reactstrap";
import logodark from "../../assets/images/logo-dark.png";
import { Icon } from "ts-react-feather-icons";

const Navbar = (props: any) => {
  const [dropdownOpenShop, setDropdownOpenShop] = useState(false);
  const [wishlistModal, setWishlistModal] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdownShop = () => {
    setDropdownOpenShop(!dropdownOpenShop);
  };

  const toggleWishlistModal = () => {
    setWishlistModal((prevState) => !prevState);
  };

  const toggleDropdownIsOpen = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const topNav = document.getElementById("topnav");
    const settingBtn = document.querySelector(".settingbtn");
    if (top > 80) {
      topNav?.classList.add("nav-sticky");
      settingBtn?.classList.add("btn-primary");
    } else {
      topNav?.classList.remove("nav-sticky");
      settingBtn?.classList.add("btn-primary");
      settingBtn?.classList.remove("btn-soft-primary");
    }
  };

  const isToggleMenu = () => {
    const isToggle = document.getElementById("isToggle");
    isToggle?.classList.toggle("open");
    const isOpen = document.getElementById("navigation");
    if (isOpen?.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen!.style.display = "block";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    initMenu();
    document.body.className = "";
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, [props.type]);

  const initMenu = () => {
    activateMenu();
  };

  const activateMenu = () => {
    const menuItems = document.getElementsByClassName(
      "sub-menu-item"
    ) as HTMLCollectionOf<HTMLAnchorElement>;

    if (menuItems) {
      let matchingMenuItem = null;
      for (let idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        const immediateParent = matchingMenuItem.closest("li");
        if (immediateParent) {
          immediateParent.classList.add("active");
        }
        const parent = matchingMenuItem.closest(".parent-menu-item");
        if (parent) {
          parent.classList.add("active");
          const parentOfParent = parent.closest(".parent-menu-item-sub");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          } else {
            const parentOfParent = parent.closest(".parent-menu-item-sub");
            if (parentOfParent) {
              parentOfParent.classList.add("active");
            }
          }
        }
      }
    }
  };

  return (
    <React.Fragment>
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          <Link className="logo" to="/">
            <img
              src={logodark}
              height="24"
              className="logo-light-mode"
              alt=""
            />
          </Link>

          <div className="menu-extras">
            <div className="menu-item">
              <Link
                to="#"
                className="navbar-toggle"
                id="isToggle"
                onClick={isToggleMenu}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0 pe-1">
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle
                  color="none"
                  type="button"
                  className="btn btn-link text-decoration-none p-0"
                >
                  <i className="uil uil-search text-dark fs-5 align-middle"></i>
                </DropdownToggle>
                <DropdownMenu
                  end
                  className="dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                  style={{ width: "300px" }}
                >
                  <div className="search-bar">
                    <Form className="searchform">
                      <input
                        type="text"
                        id="text"
                        name="name"
                        className="form-control border rounded"
                        placeholder="Search..."
                      />
                    </Form>
                  </div>
                </DropdownMenu>
              </Dropdown>
            </li>{" "}
            <li className="list-inline-item mb-0 pe-1">
              <Dropdown isOpen={dropdownOpenShop} toggle={toggleDropdownShop}>
                <DropdownToggle
                  type="button"
                  id="buyButton"
                  className="btn btn-icon btn-pills dropdown-toggle shoppingbtn"
                  color="primary"
                >
                  <Icon name="shopping-cart" />
                </DropdownToggle>
              </Dropdown>
            </li>
            <li className="list-inline-item mb-0 pe-1">
              <Link
                to="#"
                className="btn btn-icon btn-pills btn-primary"
                color="primary"
              >
                <Icon name="heart" />
              </Link>
            </li>
            <li className="list-inline-item mb-0">
              <Dropdown
                color="primary"
                isOpen={dropdownIsOpen}
                toggle={toggleDropdownIsOpen}
              >
                <DropdownToggle
                  type="button"
                  color="primary"
                  id="buyButton"
                  className="btn btn-icon btn-pills settingbtn"
                >
                  <Icon name="user" />
                </DropdownToggle>
                <DropdownMenu
                  direction="start"
                  className="dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-3"
                  style={{ width: "200px" }}
                >
                  <Link className="dropdown-item" to="#">
                    <i className="uil uil-user align-middle me-1"></i> Account
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="uil uil-clipboard-notes align-middle me-1"></i>{" "}
                    Order History
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="uil uil-arrow-circle-down align-middle me-1"></i>{" "}
                    Download
                  </Link>
                  <div className="dropdown-divider my-3 border-top"></div>
                  <Link className="dropdown-item" to="#">
                    <i className="uil uil-sign-out-alt align-middle me-1"></i>{" "}
                    Logout
                  </Link>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu">
              <li>
                <Link to="/index-shop" className="sub-menu-item">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/shop-aboutus" className="sub-menu-item">
                  {" "}
                  About Us
                </Link>
              </li>

              <li className="has-submenu parent-menu-item">
                <Link to="/#">Shop</Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <Link to="/shop-fullwidth-grids" className="sub-menu-item">
                      Fullwidth Grid
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-grids" className="sub-menu-item">
                      Product Grids
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-fullwidth-lists" className="sub-menu-item">
                      Fullwidth List
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-lists" className="sub-menu-item">
                      Product List
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-product-detail" className="sub-menu-item">
                      Product Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-cart" className="sub-menu-item">
                      Shop Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-checkouts" className="sub-menu-item">
                      Checkouts
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-myaccount" className="sub-menu-item">
                      My Account
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-menu-item">
                <Link to="/#">Pages</Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <Link to="/auth-login" className="sub-menu-item">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-signup" className="sub-menu-item">
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-re-password" className="sub-menu-item">
                      Reset Password
                    </Link>
                  </li>
                  <li>
                    <Link to="/page-comingsoon" className="sub-menu-item">
                      Coming Soon
                    </Link>
                  </li>
                  <li>
                    <Link to="/page-maintenance" className="sub-menu-item">
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/page-error" className="sub-menu-item">
                      Error
                    </Link>
                  </li>
                  <li>
                    <Link to="/page-thankyou" className="sub-menu-item">
                      Thank you
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-menu-item">
                <Link to="/#">Blog</Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <Link to="/shop-blog" className="sub-menu-item">
                      Blog Grid
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-blog-detail" className="sub-menu-item">
                      Blog Detail
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
