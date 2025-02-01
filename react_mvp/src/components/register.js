import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./somecss.css";


const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
    });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      setError(null);
    };

    const validateForm = () => {
    //   if (formData.password !== formData.confirmPassword) {
    //     setError("Passwords don't match");
    //     return false;
    //   }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long");
        return false;
      }
      return true;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsLoading(true);
      try {
        // Remove confirmPassword before sending to API
        // const { confirmPassword, ...registrationData } = formData;

        const response = await axios.post(
          "",
          formData
        );

        // Optionally auto-login user
        localStorage.setItem("token", response.data.token);

        // Redirect to login page or dashboard
        navigate("/donateDashboard");
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Registration failed. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <section className="pt-14">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="shadow-md rounded-sm">
                <div className="">
                  <h3 className="mb-4 og">Register</h3>
                </div>
                <div className="p-5">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                     {/* Username */}
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        placeholder="Enter your username"
                      />
                      <div className="invalid-feedback">
                        Please provide you username.
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter email address"
                      />
                      <div className="invalid-feedback">
                        Please provide a valid email address.
                      </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                      {/* <label htmlFor="bankAccount" className="form-label">
                    Bank Account Number *
                  </label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="6"
                        placeholder="Enter your password"
                      />
                      <div className="invalid-feedback">
                       Please provide a secure password (minimum 6
                        characters).
                      </div>
                    </div>


                    {/* Submit Button */}
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn-lg og-bt rounded-md"
                        disabled={isLoading}
                      >
                       {isLoading ? (
                      <span className="spinner-border spinner-border-sm me-2" />
                    ) : null}
                    Register
                      </button>
                    </div>

                    <div className="mt-3 text-center">
                        <p>Already have an account? <Link to="/login">Login here</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Register;
