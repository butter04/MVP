import React from "react";
import { useLocation, Link } from "react-router-dom";

const VerificationResult = () => {
  const location = useLocation();
  const { formData, verificationResult } = location.state || {};

  if (!formData || !verificationResult) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          No verification data found. Please submit the form first.
          <Link to="/ong" className="btn btn-primary ms-3">
            Go Back to Form
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Verification Result</h3>
        </div>
        <div className="card-body">
          <div className="alert alert-success">
            <h4 className="alert-heading">Bank Account Verified!</h4>
            <p>Your bank account has been successfully verified.</p>
          </div>

          <h4>Organization Details</h4>
          <dl className="row">
            <dt className="col-sm-3">Organization Name</dt>
            <dd className="col-sm-9">{formData.organizationName}</dd>

            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">{formData.email}</dd>

            <dt className="col-sm-3">Bank Account</dt>
            <dd className="col-sm-9">****{formData.bankAccount.slice(-4)}</dd>

            <dt className="col-sm-3">Bank Code</dt>
            <dd className="col-sm-9">{formData.bankCode}</dd>
          </dl>

          <h4>Verification Details</h4>
          <pre className="bg-light p-3 rounded">
            {JSON.stringify(verificationResult, null, 2)}
          </pre>

          <div className="mt-4">
            <Link to="/ong" className="btn btn-primary">
              Back to Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationResult;
