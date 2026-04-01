import React from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

import logoImg from "../../img/Group.png";
import heartImg from "../../img/Heart.png";
import cartImg from "../../img/Cart (1).png";
import phoneImg from "../../img/PhoneCall 1.png";

export default function Navbar() {
  return (
    <>
      {/* --- الجزء العلوي  --- */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 sticky-top">
        <div className="container px-lg-5 d-flex justify-content-between align-items-center">
          {/* 1. اللوجو (Group.png) */}
          <div className="d-flex align-items-center gap-2">
            <img src={logoImg} alt="Ecobazar Logo" style={{ width: "32px" }} />
            <h1 className="m-0 fs-3 fw-bold" style={{ color: "#003d29" }}>
              Ecobazar
            </h1>
          </div>

          {/* 2. شريط البحث */}
          <form
            className="d-flex flex-grow-1 mx-4"
            style={{ maxWidth: "500px" }}
          >
            <div className="input-group border rounded-2 overflow-hidden">
              <span className="input-group-text bg-transparent border-0 pe-1">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-success px-4 fw-medium border-0"
                style={{ backgroundColor: "#00B207" }}
                type="submit"
              >
                Search
              </button>
            </div>
          </form>

          <div className="d-flex align-items-center gap-3">
            {/* أيقونة القلب  */}
            <div className="position-relative cursor-pointer me-2">
              <img src={heartImg} alt="Wishlist" style={{ width: "32px" }} />
            </div>

            <div className="vr opacity-25" style={{ height: "30px" }}></div>

            <div className="d-flex align-items-center gap-2 ms-2">
              <div className="position-relative">
                <img src={cartImg} alt="Cart" style={{ width: "32px" }} />

                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success border border-white"
                  style={{ fontSize: "10px", padding: "4px 6px" }}
                ></span>
              </div>
              <div className="d-none d-md-block ms-1">
                <p className="m-0 text-muted" style={{ fontSize: "12px" }}>
                  Shopping cart:
                </p>
                <p className="m-0 fw-bold" style={{ fontSize: "14px" }}>
                  $57.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className="navbar navbar-expand-lg bg-dark navbar-dark py-2"
        style={{ backgroundColor: "#333333 !important" }}
      >
        <div className="container px-lg-5 d-flex justify-content-between align-items-center">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <Link
                className="nav-link active d-flex align-items-center gap-1"
                to="/"
              >
                <span>Home</span>
                <GoChevronDown size={14} className="mt-1" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white-50 d-flex align-items-center gap-1"
                to="/shop"
              >
                <span>Shop</span>
                <GoChevronDown size={14} className="mt-1" />
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white-50 d-flex align-items-center gap-1"
                href="#"
              >
                <span>Pages</span>
                <GoChevronDown size={14} className="mt-1" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white-50 d-flex align-items-center gap-1"
                href="#"
              >
                <span>Blog</span>
                <GoChevronDown size={14} className="mt-1" />
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/SignIn">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" to="/EditProfile">
                Edit Profile{" "}
              </Link>
            </li>
          </ul>

          {/* رقم الهاتف  */}
          <div className="d-flex align-items-center text-white gap-2">
            <img src={phoneImg} alt="Contact" style={{ width: "28px" }} />
            <span className="fw-medium">(219) 555-0114</span>
          </div>
        </div>
      </nav>
    </>
  );
}
