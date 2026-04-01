import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { AiOutlineApple } from 'react-icons/ai';
import { IoLogoGooglePlaystore } from 'react-icons/io5';


const Group = "../../img/Group.png"; 

export default function Footer() { 
    return (
        <>
            <div className="newsletter-section py-5" style={{ backgroundColor: '#F7F7F7' }}>
                <div className="container">
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
                        <div className="d-flex align-items-center gap-2">
                            <img src={Group} alt="Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                            <h2 className="fw-bold mb-0" style={{ color: '#1A1A1A', letterSpacing: '-1px' }}>Ecobazar</h2>
                        </div>
        
                        <div className="text-center text-lg-start">
                            <h4 className="fw-bold mb-1">Subscribe our Newsletter</h4>
                            <p className="text-muted small mb-0">Pellentesque eu nibh eget mauris congue mattis matti.</p>
                        </div>
        
                        <div className="d-flex flex-column flex-xl-row align-items-center gap-3">
                            <div className="input-group rounded-pill overflow-hidden bg-white border" style={{ minWidth: '350px' }}>
                                <input type="email" className="form-control border-0 px-4 shadow-none py-2" placeholder="Your email address" style={{ outline: 'none' }} />
                                <button className="btn px-4 fw-bold border-0 text-white" style={{ backgroundColor: '#00B207' }}>Subscribe</button>
                            </div>
        
                            <div className="d-flex gap-2">
                                <SocialCircleIcon icon={<FaFacebookF />} />
                                <SocialCircleIcon icon={<FaTwitter />} />
                                <SocialCircleIcon icon={<FaPinterestP />} />
                                <SocialCircleIcon icon={<FaInstagram />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <footer className="footer bg-dark text-white pt-5 pb-3">
                <div className="container text-start">
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <h3 className="fw-bold mb-3 d-flex align-items-center gap-2">About Shopery</h3>
                            <p className="text-secondary small mb-4">
                                Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
                            </p>
                            <div className="d-flex gap-3 align-items-center">
                                <span className="border-bottom border-success pb-1 fw-bold">(219) 555-0114</span>
                                <span className="text-secondary">or</span>
                                <span className="border-bottom border-success pb-1 fw-bold">Proxy@gmail.com</span>
                            </div>
                        </div>
                        <FooterCol title="My Account" links={["My Account", "Order History", "Shoping Cart", "Wishlist", "Settings"]} activeLink="Shoping Cart" />
                        <FooterCol title="Helps" links={["Contact", "Faqs", "Terms & Condition", "Privacy Policy"]} />
                        <FooterCol title="Proxy" links={["About", "Shop", "Product", "Products Details", "Track Order"]} />
                        <div className="col-lg-3">
                            <h6 className="fw-bold mb-4">Download our Mobile App</h6>
                            <div className="d-flex flex-column gap-2">
                                <AppBtn icon={<AiOutlineApple size={24}/>} sub="Download on the" main="App Store" />
                                <AppBtn icon={<IoLogoGooglePlaystore size={24}/>} sub="Download on the" main="Google play" />
                            </div>
                        </div>
                    </div>
                    <hr className="mt-5 mb-4 border-secondary" style={{ opacity: 0.2 }} />
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <p className="text-secondary small mb-0">Ecobazar eCommerce © 2021. All Rights Reserved</p>
                        <p className="text-secondary small mb-0">Apple Pay | Visa | Master Card</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

const SocialCircleIcon = ({ icon, active }) => (
    <div className={`rounded-circle d-flex align-items-center justify-content-center ${active ? 'bg-success text-white' : 'text-dark bg-light'}`} 
         style={{ width: '38px', height: '38px', cursor: 'pointer' }}>
        {icon}
    </div>
);

const FooterCol = ({ title, links, activeLink }) => (
    <div className="col-lg-2 col-md-4">
        <h6 className="fw-bold mb-4">{title}</h6>
        <ul className="list-unstyled text-secondary small">
            {links.map(link => (
                <li key={link} className={`mb-2 ${link === activeLink ? 'text-white fw-bold' : ''}`} style={{ cursor: 'pointer', transition: '0.2s' }}>
                    {link}
                </li>
            ))}
        </ul>
    </div>
);

const AppBtn = ({ icon, sub, main }) => (
    <button className="btn btn-outline-secondary d-flex align-items-center gap-2 text-white border-secondary text-start py-2" style={{ backgroundColor: '#1A1A1A' }}>
        {icon}
        <div>
            <div style={{ fontSize: '10px', opacity: 0.7 }}>{sub}</div>
            <div className="fw-bold" style={{ fontSize: '14px' }}>{main}</div>
        </div>
    </button>
);