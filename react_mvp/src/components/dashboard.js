import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./somecss.css";

const DonationDashboard = () => {
  // Sample data for the graph - replace with your actual data
  const graphData = [
    { month: "Jan", donations: 4000 },
    { month: "Feb", donations: 3000 },
    { month: "Mar", donations: 5000 },
    { month: "Apr", donations: 2780 },
    { month: "May", donations: 1890 },
    { month: "Jun", donations: 2390 },
  ];

  // Sample organizations data - replace with your actual data
  const [organizations] = useState([
    {
      id: 1,
      name: "Help Children Foundation",
      email: "contact@helpchildren.org",
      totalReceived: 12500,
      status: "Active",
    },
    {
      id: 2,
      name: "Save The Planet",
      email: "info@saveplanet.org",
      totalReceived: 8700,
      status: "Active",
    },
    {
      id: 3,
      name: "Education For All",
      email: "support@eduall.org",
      totalReceived: 15200,
      status: "Pending",
    },
  ]);

  return (
    <div className="container-fluid mt-4">
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Donation Dashboard</h2>
            <Link to="/donate" className="dn">
              Make a Donation
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="stat  text-white">
            <div className="card-body">
              <h5 className="card-title">Total Organizations</h5>
              <h3 className="card-text">{organizations.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-2 text-white">
            <div className="card-body">
              <h5 className="card-title">Total Donations</h5>
              <h3 className="card-text">$36,400</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-3 text-white">
            <div className="card-body">
              <h5 className="card-title">Active Campaigns</h5>
              <h3 className="card-text">5</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Donations Graph */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Monthly Donations</h5>
            </div>
            <div className="card-body">
              <div style={{ height: '400px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="donations" 
                      stroke="#8884d8"
                      
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizations Table */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Organizations Seeking Donations</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Organization Name</th>
                      <th>Email</th>
                      <th>Total Received</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {organizations.map(org => (
                      <tr key={org.id}>
                        <td>{org.name}</td>
                        <td>{org.email}</td>
                        <td>${org.totalReceived.toLocaleString()}</td>
                        <td>
                          <span className={`badge ${org.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                            {org.status}
                          </span>
                        </td>
                        <td>
                          <Link to="/donate" className="d">
                            Donate
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDashboard;