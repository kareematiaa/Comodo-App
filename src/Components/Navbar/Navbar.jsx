import React from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <>
        {/* Hello world */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="home">
              <img src={logo} alt="Bootstrap" width={130} height={45} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto ps-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    اتصل بنا
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link active" to="discounts">
                    خصومات
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="allData">
                    جميع المنتجات
                  </Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2 ps-3"
                  type="search"
                  placeholder="ابحث هنا"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-warning text-dark btnav"
                  type="submit"
                >
                  ابحث
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    </>
  );
}
