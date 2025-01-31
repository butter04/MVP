import React, { useState } from "react";
import "./somecss.css";
import cash from "../assets/Celebrating Make It Rain Sticker by Ragic.gif";

const Donate = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    address: "",
    bankAccount: "",
    description: "",
    paymentMethod: "",
    amount: "",
    currency: "USD",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    termsAccepted: false,
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("Form submitted:", formData);
    }

    setValidated(true);
  };

  return (
    <section className="pt-14">
      <div className="container mt-5">
        <div className="row justify-content-around">
          <div className="col-md-3 pt-36 ">
            <img src={cash} alt="cash"></img>
          </div>
          <div className="col-md-6">
            <div className="shadow-md rounded-sm bg-light-stuble">
              <div className="">
                <h3 className="mb-4 og">Organization Donation Form</h3>
              </div>
              <div className="p-8">
                <form noValidate validated={validated} onSubmit={handleSubmit}>
                  {/* Existing fields remain the same */}
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
                      placeholder="Enter your name"
                    />
                    <div className="invalid-feedback">
                      Please provide your name.
                    </div>
                  </div>

                  <div className="mb-5">
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

                  {/* Payment Section */}
                  {/* <hr className="my-4" /> */}
                  <h4 className="mb-3">Payment Details</h4>

                  {/* Amount */}
                  <div className="row mb-3">
                    <div className="col-md">
                      {/* <label htmlFor="amount" className="form-label">
                        Donation Amount 
                      </label> */}
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          id="amount"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          required
                          min="1"
                          step="0.01"
                          placeholder="Enter amount"
                        />
                        <select
                          className="form-select"
                          name="currency"
                          value={formData.currency}
                          onChange={handleChange}
                        >
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                        <div className="invalid-feedback">
                          Please enter a valid amount.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-3">
                    <label htmlFor="paymentMethod" className="form-label">
                      Payment Method
                    </label>
                    <select
                      className="form-select"
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose payment method</option>
                      <option value="credit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="bank">Bank Transfer</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a payment method.
                    </div>
                  </div>

                  {/* Credit Card Details - Show only if credit/debit card is selected */}
                  {(formData.paymentMethod === "credit" ||
                    formData.paymentMethod === "debit") && (
                    <div className="card-payment-details">
                      <div className="mb-3">
                        <label htmlFor="cardNumber" className="form-label">
                          Card Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          pattern="[0-9]{16}"
                        />
                        <div className="invalid-feedback">
                          Please enter a valid 16-digit card number.
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="expiryDate" className="form-label">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                            placeholder="MM/YY"
                            pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                          />
                          <div className="invalid-feedback">
                            Please enter a valid expiry date (MM/YY).
                          </div>
                        </div>

                        <div className="col-md-6 mb-3">
                          <label htmlFor="cvv" className="form-label">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                            placeholder="123"
                            pattern="[0-9]{3,4}"
                          />
                          <div className="invalid-feedback">
                            Please enter a valid CVV.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Terms and Conditions */}
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
                        I agree to the Terms and Conditions
                      </label>
                      <div className="invalid-feedback">
                        You must agree to the terms and conditions to proceed.
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn-lg og-bt rounded-md"
                      disabled={!formData.termsAccepted}
                    >
                      Submit Donation
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

export default Donate;
