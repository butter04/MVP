import React, { useState } from "react";
import "./somecss.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";




const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
           ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('', formData);
            
            // Store token in localStorage
            localStorage.setItem('token', response.data.token);
            
            // Redirect to dashboard or home page
            navigate("/donateDashboard");
        
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
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
                  <h3 className="mb-4 og">Login</h3>
                </div>
                <div className="p-5">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
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
                        Login
                      </button>
                    </div>

                    <div className="mt-3 text-center">
                      <p>
                        Don't have an account?{" "}
                        <Link to="/register">Register here</Link>
                      </p>
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

export default Login;