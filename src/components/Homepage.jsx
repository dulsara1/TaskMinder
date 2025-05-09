import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Smart Tax Web App</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center text-center"
          style={{
            backgroundImage: `url('https://w0.peakpx.com/wallpaper/8/305/HD-wallpaper-finance-concepts-charts-background-with-graphs-stock-exchanges-money-business-concepts-finance.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Manage Your Tax Documents With Ease
            </h2>
            <p className="text-lg mb-6">
              Simplify your tax management with our user-friendly platform.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/tax-documents"
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded shadow-md"
              >
                View Tax Documents
              </Link>
              <Link
                to="/add-tax-document"
                className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded shadow-md"
              >
                + Add New Tax Document
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="container mx-auto px-4 py-10">
          <h3 className="text-2xl font-bold text-center mb-6">Quick Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="stat-card bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Total Tax Paid
              </h3>
              <p className="text-3xl font-bold text-indigo-900">$17,879.22</p>
            </div>
            <div className="stat-card bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Pending Documents
              </h3>
              <p className="text-3xl font-bold text-indigo-900">24</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Smart Tax Web App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;