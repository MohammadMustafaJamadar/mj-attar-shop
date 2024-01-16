import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle, Form } from "reactstrap";
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
            MJ Attar Shop
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
                  style={{ width: "230px" }}
                >
                  <div className="ms-3">
                    New customer? &nbsp; &nbsp; &nbsp;{" "}
                    <Link to="/signup" className="fw-bold" >Sign up</Link>
                  </div>
                  <div className="dropdown-divider my-3 border-top"></div>
                  <Link className="dropdown-item" to="/login">
                    <i className="uil uil-user align-middle me-1"></i> Login
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
            <li className="list-inline-item mb-0 ">
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
          </ul>

          <div id="navigation">
            <ul className="navigation-menu">
              <li className="has-submenu parent-menu-item">
                <Link to="/#">Search ayenga</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
