import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import bannerImg from "../../img/immg.jpg";

export default function SignInPage() {
  // States الخاصة بالبيانات
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States الخاصة بالأخطاء والتحميل
  const [emailError, setEmailError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email (e.g. name@example.com)");
    } else {
      setEmailError("");
    }
  };

  //  المسؤولة عن تسجيل الدخول
  const handleLogin = async (e) => {
    e.preventDefault();

    // التأكد من إدخال البيانات
    if (!email || !password || emailError) {
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: email,
          password: password,
        },
      );

      // قراءة التوكن بذكاء تحسباً لو الباك إيند مغلفه جوه data
      const token =
        response.data.token || (response.data.data && response.data.data.token);

      if (token) {
        // بنحفظ الـ Token في المتصفح
        localStorage.setItem("token", token);

        alert("تم تسجيل الدخول بنجاح!");

        // توجيه المستخدم للصفحة الرئيسية
        navigate("/");
      } else {
        setServerError("لم يتم استلام Token من السيرفر.");
      }
    } catch (error) {
      console.error("Login error:", error);
      // قراءة رسالة الخطأ بشكل دقيق لو الباسورد أو الإيميل غلط
      if (error.response && error.response.data) {
        const errorMsg =
          error.response.data.message ||
          (error.response.data.data && error.response.data.data.message);
        setServerError(errorMsg || "الإيميل أو كلمة المرور غير صحيحة.");
      } else {
        setServerError(
          "حدث خطأ في الاتصال بالسيرفر. تأكدي من تشغيل الباك إيند على بورت 3000.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page bg-white pb-5 text-start">
      <div
        className="mb-0"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="h-100 w-100 d-flex align-items-center bg-dark bg-opacity-50">
          <div className="container px-lg-5 text-white small d-flex align-items-center gap-2">
            <Link to="/" className="text-white text-decoration-none">
              <GoHome size={18} />
            </Link>
            <IoIosArrowForward /> <span>Account</span>
            <IoIosArrowForward />{" "}
            <span style={{ color: "#00B207" }}>Login</span>
          </div>
        </div>
      </div>

      {/* 2. كارت تسجيل الدخول */}
      <div className="container mt-5">
        <div
          className="card mx-auto p-4 border shadow-sm"
          style={{ maxWidth: "450px", borderRadius: "10px" }}
        >
          <h2 className="text-center fw-bold mb-4">Sign In</h2>

          {/* عرض خطأ السيرفر (مثلاً: كلمة المرور غير صحيحة) */}
          {serverError && (
            <div
              className="alert alert-danger py-2 small text-center"
              role="alert"
            >
              {serverError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className={`form-control py-2 ${emailError ? "is-invalid" : email && !emailError ? "is-valid" : ""}`}
                placeholder="Email"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                required
              />
              {emailError && (
                <div className="invalid-feedback small">{emailError}</div>
              )}
            </div>

            <div className="mb-3 position-relative">
              <input
                type={showPass ? "text" : "password"}
                className="form-control py-2"
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

            <div className="d-flex justify-content-between align-items-center mb-3 small">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="rememberMe"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                size="small"
                className="text-muted text-decoration-none"
              >
                Forget Password
              </Link>
            </div>

            {/* زر تسجيل الدخول */}
            <button
              type="submit"
              className="btn w-100 py-2 rounded-pill text-white fw-bold mt-2 shadow-sm d-flex justify-content-center align-items-center gap-2"
              style={{
                backgroundColor:
                  emailError || !email || !password || loading
                    ? "#ccc"
                    : "#00B207",
                border: "none",
              }}
              disabled={!!emailError || !email || !password || loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  جاري تسجيل الدخول...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="text-center mt-3 small text-muted">
            Don't have account?
            <Link
              to="/CreateAccount"
              className="text-dark fw-bold text-decoration-none ms-1"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
