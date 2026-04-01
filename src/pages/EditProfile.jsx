import React from 'react';
import { Link } from 'react-router-dom';
import { 
    MdDashboard, MdHistory, MdFavoriteBorder, 
    MdShoppingCart, MdSettings, MdLogout 
} from "react-icons/md";

import userImg from "../../img/Ellipse 5.png"; 

export default function EditProfile() {
    return (
        <div className="dashboard-wrapper py-5 bg-white text-start">
            <div className="container">
                <div className="row g-4">
                    
                    <div className="col-lg-3">
                        <div className="card border shadow-sm" style={{ borderRadius: '8px', border: '1px solid #E6E6E6' }}>
                            <h5 className="p-3 mb-0 fw-bold border-bottom" style={{ fontSize: '18px', color: '#1A1A1A' }}>Navigation</h5>
                            <div className="list-group list-group-flush">
                                
                              
                                <div className="list-group-item p-3 d-flex align-items-center gap-2 fw-medium" 
                                     style={{ 
                                         backgroundColor: '#EDF2EE', 
                                         borderLeft: '4px solid #00B207', 
                                         color: '#1A1A1A',
                                         cursor: 'pointer' 
                                     }}>
                                    <MdDashboard size={22} /> Dashboard
                                </div>

                                <div className="list-group-item p-3 d-flex align-items-center gap-2 text-muted border-0" style={{ cursor: 'pointer' }}>
                                    <MdHistory size={22} /> Order History
                                </div>

                                <div className="list-group-item p-3 d-flex align-items-center gap-2 text-muted border-0" style={{ cursor: 'pointer' }}>
                                    <MdFavoriteBorder size={22} /> Wishlist
                                </div>

                                <div className="list-group-item p-3 d-flex align-items-center gap-2 text-muted border-0" style={{ cursor: 'pointer' }}>
                                    <MdShoppingCart size={22} /> Shopping Cart
                                </div>

                                <div className="list-group-item p-3 d-flex align-items-center gap-2 text-muted border-0" style={{ cursor: 'pointer' }}>
                                    <MdSettings size={22} /> Settings
                                </div>

                                <div className="list-group-item p-3 d-flex align-items-center gap-2 text-muted border-top" style={{ cursor: 'pointer' }}>
                                    <MdLogout size={22} /> Log-out
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. المحتوى الرئيسي  */}
                    <div className="col-lg-9">
                        <div className="row g-4">
                            
                            {/* كارت البروفايل  */}
                            <div className="col-md-7">
                                <div className="card h-100 border shadow-sm text-center p-4" style={{ borderRadius: '12px' }}>
                                    <div className="mx-auto" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                                        <img src={userImg} alt="User Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <h5 className="fw-bold mt-3 mb-1">Dianne Russell</h5>
                                    <p className="text-muted small">Customer</p>
                                    <Link to="/edit" className="text-success fw-bold text-decoration-none small">Edit Profile</Link>
                                </div>
                            </div>

                            {/* كارت عنوان الفواتير */}
                            <div className="col-md-5">
                                <div className="card h-100 border shadow-sm p-4" style={{ borderRadius: '12px' }}>
                                    <p className="text-muted small mb-1 text-uppercase fw-bold" style={{ letterSpacing: '0.5px' }}>Billing Address</p>
                                    <h5 className="fw-bold mb-2">Dianne Russell</h5>
                                    <p className="text-muted small mb-1 text-muted">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                    <p className="text-muted small mb-1 text-dark">dianne.russell@gmail.com</p>
                                    <p className="text-muted small mb-3 text-dark">(671) 555-0110</p>
                                    <Link to="/edit-address" className="text-success fw-bold text-decoration-none small">Edit Address</Link>
                                </div>
                            </div>

                            {/* 3. جدول تاريخ الطلبات */}
                            <div className="col-12 mt-4">
                                <div className="card border shadow-sm" style={{ borderRadius: '12px' }}>
                                    <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <h5 className="mb-0 fw-bold">Recent Order History</h5>
                                        <Link to="/all-orders" className="text-success text-decoration-none small fw-bold">View All</Link>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table mb-0 small">
                                            <thead className="bg-light text-muted text-uppercase" style={{ fontSize: '12px' }}>
                                                <tr>
                                                    <th className="p-3 border-0">Order ID</th>
                                                    <th className="p-3 border-0">Date</th>
                                                    <th className="p-3 border-0">Total</th>
                                                    <th className="p-3 border-0">Status</th>
                                                    <th className="p-3 border-0"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-bottom align-middle">
                                                    <td className="p-3">#738</td>
                                                    <td className="p-3 text-muted">8 Sep, 2020</td>
                                                    <td className="p-3 fw-bold">$135.00 (5 Products)</td>
                                                    <td className="p-3 text-muted">Processing</td>
                                                    <td className="p-3"><Link to="/order/738" className="text-success text-decoration-none fw-bold">View Details</Link></td>
                                                </tr>
                                                <tr className="border-bottom align-middle">
                                                    <td className="p-3">#703</td>
                                                    <td className="p-3 text-muted">24 May, 2020</td>
                                                    <td className="p-3 fw-bold">$25.00 (1 Product)</td>
                                                    <td className="p-3 text-muted">on the way</td>
                                                    <td className="p-3"><Link to="/order/703" className="text-success text-decoration-none fw-bold">View Details</Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}