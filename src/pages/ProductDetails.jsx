import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaRegEye,
} from "react-icons/fa";
import { MdOutlineShoppingBag, MdFavoriteBorder } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

import bannerImg from "../../img/immg.jpg";
import group19Logo from "../../img/Group 19.png";
import img1 from "../../img/Product Image (1).png";
import img2 from "../../img/Product Image63.png";
import img3 from "../../img/Product Image Slider.png";
import videoImg from "../../img/Video (1).png";
import leafIcon from "../../img/Group22.png";
import tagIcon from "../../img/price-tag 1.png";
import related1 from "../../img/Image (3).png";
import related2 from "../../img/Image (4).png";
import related3 from "../../img/Image (5).png";
import related4 from "../../img/Image (8).png";

export default function ProductDetails() {
  const { state } = useLocation();
  const defaultProductImg = img1; // الصورة الافتراضية للمنتج
  const mainImg = state?.image
    ? `http://localhost:3000${state.image}`
    : defaultProductImg;

  const [mainImage, setMainImage] = useState(mainImg);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("additional");

  if (!state)
    return <div className="p-5 text-center">لا توجد بيانات للمنتج</div>;

  const thumbImages = [
    state?.image ? `http://localhost:3000${state.image}` : defaultProductImg,
    img2,
    img3,
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Green Apple",
      price: 14.99,
      oldPrice: 20.99,
      img: related1,
      sale: "50%",
    },
    { id: 2, name: "Chanise Cabbage", price: 14.99, img: related2 },
    { id: 3, name: "Green Capsicum", price: 14.99, img: related3 },
    { id: 4, name: "Ladies Finger", price: 14.99, img: related4 },
    
  ];

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultProductImg;
  };

  return (
    <div className="product-details-page bg-white text-start">
      <style>{`
        .product-card { transition: all 0.3s ease; cursor: pointer; }
        .product-card:hover { border: 1px solid #00B207 !important; box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important; }
        .hover-icons { opacity: 0; transition: opacity 0.3s ease; z-index: 10; }
        .product-card:hover .hover-icons { opacity: 1; }
        .action-btn:hover { background-color: #00B207 !important; color: white !important; }
      `}</style>

      {/* Banner */}
      <div
        className="position-relative mb-5"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80px",
        }}
      >
        <div className="h-100 w-100 d-flex align-items-center bg-dark bg-opacity-75">
          <div className="container">
            <div className="d-flex align-items-center gap-2 text-white-50 small">
              <GoHome size={16} className="text-white" />
              <IoIosArrowForward />
              <span>Category</span>
              <IoIosArrowForward />
              <span>Vegetables</span>
              <IoIosArrowForward />
              <span style={{ color: "#00B207" }}>{state.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container pb-5">
        <div className="row g-4">
          {/* Images */}
          <div className="col-lg-6 d-flex gap-3">
            <div className="d-flex flex-column gap-2">
              {thumbImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`border rounded p-1 ${mainImage === img ? "border-success" : ""}`}
                  style={{ width: "80px", height: "80px", cursor: "pointer" }}
                >
                  <img
                    src={img}
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: "contain" }}
                    alt="thumb"
                    onError={handleImgError}
                  />
                </div>
              ))}
            </div>
            <div className="border rounded-3 p-4 flex-grow-1 text-center shadow-sm d-flex align-items-center justify-content-center">
              <img
                src={mainImage}
                className="img-fluid"
                style={{ maxHeight: "400px" }}
                alt="main"
                onError={handleImgError}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="col-lg-6 px-lg-5">
            <div className="d-flex align-items-center gap-2 mb-1">
              <h1 className="fw-bold h2 mb-0 text-dark">{state.name}</h1>
              <span
                className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1"
                style={{ fontSize: "12px" }}
              >
                In Stock
              </span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-3 text-muted small">
              <div className="text-warning d-flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar className="text-muted" />
              </div>
              <span>(4 Reviews)</span>
              <span className="mx-1">•</span>
              <span>SKU: 2,541</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
              <span className="text-muted text-decoration-line-through fs-5">
                $48.00
              </span>
              <span className="fw-bold fs-1 text-success">${state.price}</span>
              <span
                className="badge bg-danger-subtle text-danger rounded-pill px-2 py-1"
                style={{ fontSize: "12px" }}
              >
                64% OFF
              </span>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="text-dark fw-bold small">Brand:</span>
                <img
                  src={group19Logo}
                  alt="brand"
                  style={{ height: "25px", objectFit: "contain" }}
                  onError={handleImgError}
                />
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="small fw-bold">Share item:</span>
                <div className="d-flex gap-3 text-muted">
                  <FaFacebookF style={{ cursor: "pointer" }} />
                  <FaTwitter style={{ cursor: "pointer" }} />
                  <FaPinterestP style={{ cursor: "pointer" }} />
                  <FaInstagram style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>

            <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum.
            </p>

            <div className="d-flex gap-3 align-items-center mb-4 flex-wrap">
              <div className="d-flex align-items-center border rounded-pill p-1 bg-light shadow-sm">
                <button
                  className="btn btn-sm px-3 border-0 fw-bold"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="px-2 fw-bold">{quantity}</span>
                <button
                  className="btn btn-sm px-3 border-0 fw-bold"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-success rounded-pill px-5 py-3 flex-grow-1 d-flex align-items-center justify-content-center gap-2 fw-bold shadow"
                style={{ backgroundColor: "#00B207", border: "none" }}
              >
                Add to Cart <MdOutlineShoppingBag size={22} />
              </button>
              <button className="btn btn-light rounded-circle border p-3 shadow-sm d-flex align-items-center">
                <MdFavoriteBorder size={24} />
              </button>
            </div>

            <div className="pt-3 border-top">
              <p className="small mb-1">
                <b className="text-dark">Category:</b>{" "}
                <span className="text-muted">Vegetables</span>
              </p>
              <p className="small mb-0">
                <b className="text-dark">Tag:</b>{" "}
                <span className="text-muted">Healthy, Chinese, Cabbage</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mt-5">
        <div className="d-flex justify-content-center gap-5 border-bottom mb-4">
          {["Descriptions", "Additional Information", "Customer Feedback"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().split(" ")[0])}
                className={`btn pb-2 rounded-0 fw-medium ${activeTab === tab.toLowerCase().split(" ")[0] ? "border-bottom border-success border-3 text-dark" : "text-muted border-0"}`}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        <div className="row g-5 py-4 align-items-center">
          {activeTab === "additional" && (
            <>
              <div className="col-md-6">
                <ul className="list-unstyled d-flex flex-column gap-3 small">
                  <li className="row">
                    <b className="col-4">Weight:</b>{" "}
                    <span className="col-8 text-muted">03</span>
                  </li>
                  <li className="row">
                    <b className="col-4">Color:</b>{" "}
                    <span className="col-8 text-muted">Green</span>
                  </li>
                  <li className="row">
                    <b className="col-4">Type:</b>{" "}
                    <span className="col-8 text-muted">Organic</span>
                  </li>
                  <li className="row">
                    <b className="col-4">Category:</b>{" "}
                    <span className="col-8 text-muted">Vegetables</span>
                  </li>
                  <li className="row">
                    <b className="col-4">Stock Status:</b>{" "}
                    <span className="col-8 text-muted">Available (5,413)</span>
                  </li>
                  <li className="row">
                    <b className="col-4">Tags:</b>{" "}
                    <span className="col-8 text-muted">
                      Vegetables, Healthy, Chinese, Cabbage
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="position-relative mb-4 rounded-3 overflow-hidden shadow-sm">
                  <img
                    src={videoImg}
                    alt="Product Video"
                    className="w-100 img-fluid"
                    style={{ borderRadius: "10px" }}
                    onError={handleImgError}
                  />
                </div>
                <div className="border rounded-3 p-3 d-flex justify-content-around align-items-center shadow-sm">
                  <div className="d-flex align-items-center gap-2 pe-3 border-end">
                    <img
                      src={tagIcon}
                      alt="tag"
                      style={{ width: "32px" }}
                      onError={handleImgError}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold small">64% Discount</h6>
                      <small
                        className="text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        Save your 64% money
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 ps-2">
                    <img
                      src={leafIcon}
                      alt="organic"
                      style={{ width: "32px" }}
                      onError={handleImgError}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold small">100% Organic</h6>
                      <small
                        className="text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        100% Organic Vegetables
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="container my-5 py-5 text-center">
        <h2 className="fw-bold mb-5 text-dark">Related Products</h2>
        <div className="row g-4">
          {relatedProducts.map((prod) => (
            <div key={prod.id} className="col-md-3">
              <div
                className={`card h-100 border-1 product-card position-relative ${prod.active ? "border-success" : "border-light"}`}
              >
                {prod.sale && (
                  <span
                    className="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 rounded-2"
                    style={{ zIndex: 5 }}
                  >
                    Sale {prod.sale}
                  </span>
                )}
                <div className="hover-icons position-absolute top-0 end-0 m-3 d-flex flex-column gap-2">
                  <button className="btn btn-light rounded-circle shadow-sm p-2 action-btn border-0">
                    <MdFavoriteBorder size={20} />
                  </button>
                  <button className="btn btn-light rounded-circle shadow-sm p-2 action-btn border-0">
                    <FaRegEye size={20} />
                  </button>
                </div>
                <div className="p-3">
                  <div className="text-center mb-3">
                    <img
                      src={prod.img}
                      alt={prod.name}
                      className="img-fluid"
                      style={{ height: "200px", objectFit: "contain" }}
                      onError={handleImgError}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="text-start">
                      <h6 className="mb-1 text-secondary small">{prod.name}</h6>
                      <div className="d-flex gap-2 align-items-center mb-1">
                        <span className="fw-bold text-dark">${prod.price}</span>
                        {prod.oldPrice && (
                          <small className="text-muted text-decoration-line-through">
                            ${prod.oldPrice}
                          </small>
                        )}
                      </div>
                      <div
                        className="text-warning small d-flex gap-1"
                        style={{ fontSize: "12px" }}
                      >
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar className="text-muted" />
                      </div>
                    </div>
                    <button className="btn btn-light rounded-circle border-0 p-2 action-btn shadow-sm bg-light">
                      <MdOutlineShoppingBag size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
