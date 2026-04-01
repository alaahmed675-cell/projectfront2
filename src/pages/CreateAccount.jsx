import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setPassError("Passwords do not match!");
    } else {
      setPassError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || emailError || passError || !password || !email) return;

    setLoading(true);
    setServerError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          name,
          email,
          password,
        },
      );

      const token =
        response.data.token || (response.data.data && response.data.data.token);

      if (token) {
        localStorage.setItem("token", token); // حفظ الـ token
        alert("تم إنشاء الحساب بنجاح!");
        navigate("/"); // توجيه المستخدم للصفحة الرئيسية
      } else {
        setServerError("تم التسجيل ولكن لم يتم استلام Token من السيرفر.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.data) {
        const errorMsg =
          error.response.data.message ||
          (error.response.data.data && error.response.data.data.message);
        setServerError(
          errorMsg || "هذا الحساب موجود بالفعل أو حدث خطأ في البيانات.",
        );
      } else {
        setServerError(
          "خطأ في الاتصال بالسيرفر. تأكد من تشغيل الباك إند على بورت 3000.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 text-start">
      <div
        className="card mx-auto p-4 shadow-sm"
        style={{ maxWidth: "450px", borderRadius: "10px" }}
      >
        <h2 className="text-center fw-bold mb-4">Create Account</h2>

        {serverError && (
          <div className="alert alert-danger py-2 small text-center">
            {serverError}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className={`form-control ${emailError ? "is-invalid" : ""}`}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && (
              <div className="text-danger small mt-1">{emailError}</div>
            )}
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showPass ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showConfirmPass ? "text" : "password"}
              className={`form-control ${passError ? "is-invalid" : ""}`}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <span
              className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted"
              style={{ cursor: "pointer" }}
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            >
              {showConfirmPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            {passError && (
              <div className="text-danger small mt-1">{passError}</div>
            )}
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required
            />
            <label
              className="form-check-label small text-muted"
              htmlFor="terms"
            >
              Accept all terms & Conditions
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill fw-bold"
            disabled={passError || emailError || !name || loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-3 small">
          Already have account?{" "}
          <Link to="/signin" className="fw-bold text-dark text-decoration-none">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
