import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ecobazar.css';

// --- الأيقونات ---
import { IoMdStar } from "react-icons/io";
import { AiOutlineHeart, AiOutlineEye, AiOutlineApple } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

// --- الصور الأساسية ---
import img from "../../img/ceacf192f06daaf9ab6d0274ea45517b334ce6b1.png";
import img2 from "../../img/Image (2).png";
import img3 from "../../img/Image (2).png";
import img4 from "../../img/Image (3).png";
import img5 from "../../img/Image (4).png";
import img6 from "../../img/Image (5).png";
import headPhone from "../../img/headphones 1.png";
import delivery from "../../img/delivery-truck 1.png";
import shopping from "../../img/shopping-bag.png";
import cricl from "../../img/cricl.png";
import image6 from "../../img/Image 6.png";

import groupIcon from "../../img/Group.png";

import banner1 from "../../img/bluebanner.png"; 
import banner2 from "../../img/Rectangle 54.png";       
import banner3 from "../../img/Bannar.png";     

// --- صور الإنستجرام ---
import insta1 from "../../img/Instagram Post (2).png"; 
import insta2 from "../../img/Instagram Post (2).png"; 
import insta3 from "../../img/Instagram Post (3).png"; 
import insta4 from "../../img/Instagram Post (4).png"; 
import insta5 from "../../img/Instagram Post (5).png"; 
import insta6 from "../../img/Instagram Post (6).png"; 

import user1 from "../../img/Image44.png"; 
import user2 from "../../img/Image9.png"; 
import user3 from "../../img/imag7.png";

const EcobazarHero = () => {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="py-5 position-relative" style={{ backgroundColor: '#EDF2EE', minHeight: '600px' }}>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-6">
                            <p className="text-uppercase fw-medium mb-2" style={{ color: '#00B207', letterSpacing: '1px', fontSize: '14px' }}>
                                Welcome to Shopery
                            </p>
                            <h1 className="display-4 fw-bold mb-3" style={{ color: '#1A1A1A' }}>
                                Fresh & Healthy <br /> <span className="fw-normal">Organic Food</span>
                            </h1>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="fs-4">Sale up to</span>
                                <span className="fs-4 fw-bold" style={{ color: '#FF8A00' }}>30% OFF</span>
                            </div>
                            <p className="text-muted mb-4">Free shipping on all your order. we deliver, you enjoy</p>
                          <button 
                     style={{
                   backgroundColor: '#00B207',
                    color: 'white',
                   border: 'none',
                 borderRadius: '25px',
                 padding: '10px 20px',
                  
                     }}
                   >
                   Shop Now
                       </button>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={img} className="img-fluid drop-shadow" alt="Veggies" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Features Bar */}
            <div className="container" style={{ marginTop: '-50px', position: 'relative', zIndex: '10' }}>
                <div className="bg-white shadow-sm border rounded-3 p-4">
                    <div className="row g-4 justify-content-center text-center text-lg-start">
                        <FeatureItem src={delivery} title="Free Shipping" desc="Free shipping on all your order" />
                        <FeatureItem src={headPhone} title="Customer Support 24/7" desc="Instant access to Support" />
                        <FeatureItem src={shopping} title="100% Secure Payment" desc="We ensure your money is safe" />
                        <FeatureItem src={cricl} title="Money-Back Guarantee" desc="30 Days Money-Back" />
                    </div>
                </div>
            </div>

            {/* 3. Featured Products */}
            <div className='container mt-5 pt-4'>
                <div className='text-center mb-4'>
                    <h2 className='fw-bold'>Featured Products</h2>
                </div>
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3'>
                    <ProductCard image={img2} name="Green Apple" price="14.99" />
                    <ProductCard image={img3} name="Chanise Cabbage" price="14.99" />
                    <ProductCard image={img4} name="Green Lettuce" price="14.99" />
                    <ProductCard image={img5} name="Green Chili" price="14.99" />
                    <ProductCard image={img6} name="Corn" price="14.99" />
                </div>
            </div>

            {/* 4. Hot Deals & Lists */}
            <div className='container mt-5 pt-3 mb-5'>
                <div className='row g-4'>
                    <div className='col-lg-3 col-md-6'>
                        <h5 className="fw-bold mb-3">Hot Deals</h5>
                        <ListProductItem image={img2} name="Green Apple" price="14.99" />
                        <ListProductItem image={img3} name="Indian Malta" price="14.99" />
                        <ListProductItem image={img4} name="Green Lettuce" price="14.99" />
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <h5 className="fw-bold mb-3">Best Seller</h5>
                        <ListProductItem image={img5} name="Eggplant" price="14.99" />
                        <ListProductItem image={img6} name="Red Capsicum" price="14.99" oldPrice="20.99" />
                        <ListProductItem image={img2} name="Red Tomatos" price="14.99" />
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <h5 className="fw-bold mb-3">Top Rated</h5>
                        <ListProductItem image={img3} name="Big Potatos" price="14.99" />
                        <ListProductItem image={img6} name="Corn" price="14.99" oldPrice="20.99" />
                        <ListProductItem image={img5} name="Fresh Cauliflower" price="14.99" />
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <div className="rounded-3 text-center w-100 h-100"
                            style={{
                                backgroundImage: `url(${image6})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                paddingTop: '40px'  
                            }}>
                            <p className="text-uppercase mb-2 fw-bold" style={{ fontSize: '13px', letterSpacing: '1px', color: '#1A1A1A' }}>Summer Sale</p>
                            <h2 className="display-6 fw-bold mb-4" style={{ color: '#00B207' }}>75% off</h2>
                            <button className="btn bg-white rounded-pill px-4 py-2 fw-bold shadow-sm d-inline-flex align-items-center gap-2" style={{ color: '#00B207', fontSize: '15px' }}>
                                Shop Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Promotional Banners Section */}
            <div className="container mt-5 mb-5">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 text-center d-flex flex-column align-items-center justify-content-start position-relative overflow-hidden"
                             style={{ backgroundImage: `url(${banner1})`, backgroundColor: '#2D81B1', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '400px', paddingTop: '40px', color: '#fff' }}>
                            <p className="text-uppercase mb-2" style={{ fontSize: '12px', letterSpacing: '1px', opacity: '0.8' }}>Best Deals</p>
                            <h3 className="fw-bold mb-3">Sale of the Month</h3>
                            <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                                <div className="text-center"><div className="fs-5 fw-bold">00</div><div style={{ fontSize: '10px', opacity: '0.8' }}>DAYS</div></div>
                                <div className="fs-5 fw-bold mb-3">:</div>
                                <div className="text-center"><div className="fs-5 fw-bold">02</div><div style={{ fontSize: '10px', opacity: '0.8' }}>HOURS</div></div>
                                <div className="fs-5 fw-bold mb-3">:</div>
                                <div className="text-center"><div className="fs-5 fw-bold">18</div><div style={{ fontSize: '10px', opacity: '0.8' }}>MINS</div></div>
                                <div className="fs-5 fw-bold mb-3">:</div>
                                <div className="text-center"><div className="fs-5 fw-bold">46</div><div style={{ fontSize: '10px', opacity: '0.8' }}>SECS</div></div>
                            </div>
                            <button className="btn bg-white rounded-pill px-4 py-2 fw-bold shadow-sm d-inline-flex align-items-center gap-2" style={{ color: '#00B207', fontSize: '14px' }}>
                                Shop Now <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 text-center d-flex flex-column align-items-center justify-content-start position-relative overflow-hidden"
                             style={{ backgroundImage: `url(${banner2})`, backgroundColor: '#0F0F0F', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '400px', paddingTop: '40px', color: '#fff' }}>
                            <p className="text-uppercase mb-2" style={{ fontSize: '12px', letterSpacing: '1px', opacity: '0.8' }}>85% Fat Free</p>
                            <h3 className="fw-bold mb-2">Low-Fat Meat</h3>
                            <p className="mb-4" style={{ fontSize: '15px' }}>Started at <span className="fw-bold" style={{ color: '#FF8A00' }}>$79.99</span></p>
                            <button className="btn bg-white rounded-pill px-4 py-2 fw-bold shadow-sm d-inline-flex align-items-center gap-2" style={{ color: '#00B207', fontSize: '14px' }}>
                                Shop Now <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 text-center d-flex flex-column align-items-center justify-content-start position-relative overflow-hidden"
                             style={{ backgroundImage: `url(${banner3})`, backgroundColor: '#F3C911', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '400px', paddingTop: '40px', color: '#1A1A1A' }}>
                            <p className="text-uppercase mb-2 fw-bold" style={{ fontSize: '12px', letterSpacing: '1px' }}>Summer Sale</p>
                            <h3 className="fw-bold mb-2">100% Fresh Fruit</h3>
                            <div className="d-flex align-items-center gap-2 mb-4 justify-content-center" style={{ fontSize: '15px' }}>
                                <span>Up to</span><span className="badge text-warning px-2 py-1" style={{ backgroundColor: '#1A1A1A', fontSize: '14px' }}>64% OFF</span>
                            </div>
                            <button className="btn bg-white rounded-pill px-4 py-2 fw-bold shadow-sm d-inline-flex align-items-center gap-2" style={{ color: '#00B207', fontSize: '14px' }}>
                                Shop Now <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 6. Newest Products Section */}
            <div className='container mt-5 pt-4'>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <div>
                        <h2 className='fw-bold mb-1'>Newest Products</h2>
                        <div style={{ width: '60px', height: '3px', backgroundColor: '#00B207', borderRadius: '5px' }}></div>
                    </div>
                    <a href="#" className="text-success text-decoration-none fw-medium d-flex align-items-center gap-1" style={{ color: '#00B207' }}>
                        View All <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                </div>
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3'>
                    <ProductCard image={img2} name="Green Apple" price="14.99" />
                    <ProductCard image={img3} name="Chanise Cabbage" price="14.99" />
                    <ProductCard image={img4} name="Green Lettuce" price="14.99" />
                    <ProductCard image={img5} name="Green Chili" price="14.99" />
                    <ProductCard image={img6} name="Corn" price="14.99" />
                </div>
            </div>

            {/* 7. Client Testimonial Section */}
            <div className="py-5 mt-5" style={{ backgroundColor: '#F3F4F6' }}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4 pb-2">
                        <div>
                            <h2 className="fw-bold mb-1">Client Testimonial</h2>
                            <div style={{ width: '60px', height: '3px', backgroundColor: '#00B207', borderRadius: '5px' }}></div>
                        </div>
                        <div className="d-flex gap-2">
                            <button className="btn bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', border: '1px solid #E5E5E5' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                            </button>
                            <button className="btn rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', backgroundColor: '#00B207', color: 'white' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </button>
                        </div>
                    </div>

                    <div className="row g-4">
                        <TestimonialCard avatar={user1} name="Robert Fox" />
                       <TestimonialCard avatar={user2} name="Dianne Russell" />
                      <TestimonialCard avatar={user3} name="Eleanor Pena" />
                    </div>

                 
                </div>
            </div>

            {/* 8. Instagram Section */}
            <div className="container mt-5 pt-5 text-center mb-5">
                <h3 className="fw-bold mb-4">Follow us on Instagram</h3>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2 justify-content-center">
                    {[insta1, insta2, insta3, insta4, insta5, insta6].map((img, i) => (
                        <InstagramItem key={i} image={img} hasIcon={i === 1} />
                    ))}
                </div>
            </div>

            {/* 9. Newsletter Section */}
           
        </>
    );
};


/* ======================================================================
   --- المكونات المساعدة (Helper Components) --- 
   ====================================================================== */

const FeatureItem = ({ src, title, desc }) => (
    <div className="col-md-6 col-lg-3">
        <div className="d-flex align-items-center gap-3 px-2">
            <img src={src} alt={title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div>
                <h6 className="mb-0 fw-bold" style={{ fontSize: '15px', color: '#1A1A1A' }}>{title}</h6>
                <small className="text-muted" style={{ fontSize: '13px' }}>{desc}</small>
            </div>
        </div>
    </div>
);

const ProductCard = ({ image, name, price, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={`card h-100 product-card p-3 rounded-3 position-relative overflow-hidden ${isActive ? 'active-card border-success' : 'border-light shadow-sm'}`} style={{ transition: '0.3s' }}>
                <div className="card-actions position-absolute top-0 end-0 p-2 d-flex flex-column gap-2" style={{
                    opacity: isHovered || isActive ? 1 : 0,
                    transform: isHovered || isActive ? 'translateX(0)' : 'translateX(10px)',
                    transition: 'all 0.3s ease',
                    zIndex: 2
                }}>
                    <button className="btn bg-white rounded-circle shadow-sm p-2 d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}><AiOutlineHeart size={18} /></button>
                    <button className="btn bg-white rounded-circle shadow-sm p-2 d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}><AiOutlineEye size={18} /></button>
                </div>

                <div className="text-center mb-3 mt-2">
                    <img src={image} className="img-fluid" alt={name} style={{ height: '140px', objectFit: 'contain' }} />
                </div>

                <div className="card-body p-0">
                    <p className="text-muted mb-1" style={{ fontSize: '14px' }}>{name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold" style={{ color: '#1A1A1A', fontSize: '16px' }}>${price}</span>
                        <button className="btn rounded-circle d-flex align-items-center justify-content-center" 
                                style={{ width: '35px', height: '35px', backgroundColor: isActive ? '#00B207' : '#F2F2F2', color: isActive ? 'white' : '#1A1A1A' }}>
                            <HiOutlineShoppingBag size={18} />
                        </button>
                    </div>
                    <div className="text-warning mt-2" style={{ fontSize: '14px' }}>
                        <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar color="#E5E5E5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ListProductItem = ({ image, name, price, oldPrice, isActive }) => (
    <div className={`list-item-card d-flex align-items-center p-2 mb-3 rounded-3 border bg-white ${isActive ? 'active-list border-success' : 'border-light'}`} style={{ transition: '0.3s' }}>
        <img src={image} alt={name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} className="me-3" />

        <div className="flex-grow-1">
            <p className="mb-1" style={{ fontSize: '14px', color: '#1A1A1A' }}>{name}</p>
            <div className="d-flex align-items-center gap-2 mb-1">
                <span className="fw-bold" style={{ fontSize: '15px' }}>${price}</span>
                {oldPrice && <span className="text-muted text-decoration-line-through" style={{ fontSize: '13px' }}>${oldPrice}</span>}
            </div>
            <div className="text-warning" style={{ fontSize: '12px' }}>
                <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar color="#E5E5E5" />
            </div>
        </div>

       
    </div>
);

const TestimonialCard = ({ avatar, name }) => (
    <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-sm p-4 h-100 rounded-3 bg-white">
         
            <p className="text-muted mb-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
            </p>
            <div className="d-flex align-items-center justify-content-between mt-auto">
                <div className="d-flex align-items-center gap-3">
                    <img src={avatar} alt={name} className="rounded-circle" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                    <div>
                        <h6 className="mb-0 fw-bold">{name}</h6>
                        <small className="text-muted">Customer</small>
                    </div>
                </div>
                <div className="text-warning" style={{ fontSize: '14px' }}>
                    <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
                </div>
            </div>
        </div>
    </div>
);

const InstagramItem = ({ image, hasIcon }) => (
    <div className="col px-1">
        <div className="insta-box position-relative overflow-hidden rounded-3" style={{ height: '180px' }}>
            <img src={image} className="w-100 h-100" style={{ objectFit: 'cover' }} alt="Insta" />
            {hasIcon && (
                <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                    <FaInstagram size={30} color="white" />
                </div>
            )}
        </div>
    </div>
);



export default EcobazarHero;