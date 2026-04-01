import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaArrowRight, FaTimes, FaStar } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineShoppingBag } from "react-icons/md";

import bannerImg from "../../img/immg.jpg";
import defaultImg from "../../img/Product Image.png";

const CountdownUnit = ({ value, label }) => (
  <div className="text-center">
    <div className="fs-4 fw-bold text-white">{value}</div>
    <div className="text-white opacity-75" style={{ fontSize: "10px" }}>
      {label}
    </div>
  </div>
);

const FilterSelect = ({ label }) => (
  <div
    className="d-flex align-items-center justify-content-between px-3 py-2 border rounded bg-white shadow-sm"
    style={{ minWidth: "150px", cursor: "pointer" }}
  >
    <span className="small">{label}</span>
    <MdKeyboardArrowDown className="text-muted" />
  </div>
);

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/products?page=1&limit=10",
        );

        console.log("FULL RESPONSE:", response.data);

        // بيانات المنتجات
        const data = response.data.data;
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.log("ERROR FULL:", err);
        console.log("ERROR RESPONSE:", err.response);
        console.log("ERROR MESSAGE:", err.message);

        setError("حدث خطأ في جلب المنتجات");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <div className="d-flex align-items-center gap-2 mb-4 text-muted small">
        <GoHome size={18} />
        <IoIosArrowForward />
        <span>Categories</span>
        <IoIosArrowForward />
        <span style={{ color: "#00B207" }}>Products</span>
      </div>

      {/* Banner */}
      <div
        className="position-relative overflow-hidden rounded-3 mb-5 shadow"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      >
        <div className="h-100 d-flex flex-column justify-content-center ps-5 bg-dark bg-opacity-50 position-relative">
          <p className="text-white text-uppercase mb-1 small fw-bold">
            Best Deals
          </p>
          <h1 className="text-white display-5 fw-bold mb-3">
            Sale of the Month
          </h1>

          <div className="d-flex gap-3 mb-4">
            <CountdownUnit value="00" label="DAYS" />
            <span className="text-white fs-3">:</span>
            <CountdownUnit value="02" label="HOURS" />
            <span className="text-white fs-3">:</span>
            <CountdownUnit value="18" label="MINS" />
            <span className="text-white fs-3">:</span>
            <CountdownUnit value="46" label="SECS" />
          </div>

          <button
            className="btn btn-success rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#00B207",
              border: "none",
              width: "fit-content",
              zIndex: 10,
            }}
          >
            Shop Now <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div className="d-flex gap-2">
          <FilterSelect label="Select Category" />
          <FilterSelect label="Select Price" />
          <FilterSelect label="Select Rating" />
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="text-muted small">Sort by:</span>
          <FilterSelect label="Latest" />
        </div>
      </div>

      {/* Loading/Error */}
      {loading && (
        <div className="text-center py-5">
          <h5>جاري تحميل المنتجات...</h5>
        </div>
      )}
      {error && <div className="alert alert-danger text-center">{error}</div>}
      {!loading && !error && products.length === 0 && (
        <div className="text-center py-5 text-muted">
          <h5>لا توجد منتجات</h5>
        </div>
      )}

      {/* Products */}
      <div className="row g-4 mb-5">
        {products.map((p) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={p._id}>
            <Link
              to={`/product/${p._id}`}
              state={p}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card h-100 border-0 shadow-sm p-3">
                <div className="text-center mb-3">
                  <img
                    src={
                      p.image ? `http://localhost:3000${p.image}` : defaultImg
                    }
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = defaultImg;
                    }}
                  />
                </div>

                <div className="card-body p-0 text-start">
                  <h6 className="text-muted mb-1">{p.name}</h6>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">${p.price}</span>
                      <div className="text-warning mt-1">
                        {[...Array(4)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>

                 <button className="btn btn-success p-2">
  <MdOutlineShoppingBag size={20} />
</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
