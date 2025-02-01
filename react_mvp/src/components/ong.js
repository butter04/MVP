import React, { useState } from "react";
import "./somecss.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Ong = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    address: "",
    bankAccount: "",
    bankCode: "", // New field
  });

  const [validated, setValidated] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error when user starts typing again
    setError(null);
  };

  const verifyBankAccount = async () => {
    try {
      console.log("ok");
      // console.log("🔄 Verifying bank account...");
      setIsloading(true);
      const response = await axios.get(
        "http://localhost:8080/api/accounts/checkcards",
        {
          params: {
            accountId: formData.bankAccount,
            bankCode: formData.bankCode,
          }
        }
      );
      console.log(formData.bankAccount);
      console.log(formData.bankCode);
      // Store the verification response in the state to pass to the next page
      console.log(response.data);

      return response.data;
    } catch (err) {
      throw new Error(
        // console.log("ok"),
        err.response?.data?.message || "Failed to verify bank account"
      );
    } finally {
      setIsloading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("🚀 Form submitted");
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      // console.warn("⚠️ Form validation failed");
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      // Verify bank account first
      const verificationResult = await verifyBankAccount();

      // If verification successful, proceed with form submission
      console.log("Form submitted:", formData);

      // Navigate to result page with both form data and verification result
      navigate("/checkBank", {
        state: {
          formData,
          verificationResult,
        },
      });
    } catch (err) {
      setError(err.message);
      setValidated(false);
    }
  };

  return (
    <section className="pt-14">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="shadow-md rounded-sm">
              <div className="">
                <h3 className="mb-4 og">Organization Donation Form</h3>
              </div>
              <div className="p-5">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit}  validated={validated}>
                  {/* Organization Name */}
                  <div className="mb-4">
                    {/* <label htmlFor="organizationName" className="form-label">
                    Organization Name *
                  </label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      placeholder="Enter organization name"
                    />
                    <div className="invalid-feedback">
                      Please provide your organization name.
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    {/* <label htmlFor="email" className="form-label">
                    Email Address *
                  </label> */}
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

                  {/* Address */}
                  <div className="mb-4">
                    {/* <label htmlFor="address" className="form-label">
                    Address *
                  </label> */}
                    <input
                      className="form-control"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows=""
                      placeholder="Enter complete address"
                    />
                    <div className="invalid-feedback">
                      Please provide your address.
                    </div>
                  </div>

                  {/* Bank Account */}
                  <div className="mb-4">
                    {/* <label htmlFor="bankAccount" className="form-label">
                    Bank Account Number *
                  </label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="bankAccount"
                      name="bankAccount"
                      value={formData.bankAccount}
                      onChange={handleChange}
                      required
                      placeholder="Enter bank account number"
                      pattern="[0-9]{8,}"
                    />
                    <div className="invalid-feedback">
                      Please provide a valid bank account number (minimum 8
                      digits).
                    </div>
                  </div>

                  <div className="mb-3">
                    {/* <label htmlFor="bankCode" className="form-label">
                      Bank Code *
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="bankCode"
                      name="bankCode"
                      value={formData.bankCode}
                      onChange={handleChange}
                      required
                      placeholder="Enter bank code"
                      pattern="[0-9]{3,}"
                    />
                    <div className="invalid-feedback">
                      Please provide a valid bank code.                    </div>
                  </div>

                  {/* Description */}
                  {/* <div className="mb-4"> */}
                  {/* <label htmlFor="description" className="form-label">
                    Organization Description
                  </label> */}
                  {/* <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Describe your organization and how the donations will be used"
                    />
                  </div> */}

                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="termsAccepted"
                      >
                        I agree to the Terms and Conditions *
                      </label>
                      <div className="invalid-feedback">
                        You must agree to the terms and conditions to proceed.
                      </div>
                    </div>
                    <div className="mt-2">
                      <small className="text-muted">
                        By checking this box, you agree to our{" "}
                        <a
                          href="#vv"
                          data-bs-toggle="modal"
                          data-bs-target="#termsModal"
                        >
                          Terms and Conditions
                        </a>
                        .
                      </small>
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
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Verifying...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
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

export default Ong;
