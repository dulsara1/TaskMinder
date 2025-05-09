import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTaxDocuments, deleteTaxDocumentById } from './Services/Services'; // Import API functions

const URL = "http://localhost:5079/tax-documents/";
const TaxDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch documents from your backend API
    const fetchDocuments = async () => {
      try {
        const data = await getAllTaxDocuments(); // Use the service function
        setDocuments(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching documents:', error.message);
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTaxDocumentById(id); // Call the delete service
      setDocuments(documents.filter((doc) => doc._id !== id)); // Update state after deletion
      alert('Document deleted successfully!');
    } catch (error) {
      console.error('Error deleting document:', error.message);
      alert('Failed to delete the document.');
    }
  };

  return (
    <div className="documents-container bg-gray-100 min-h-screen p-6">
      <div className="documents-header flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-indigo-900">Tax Documents</h2>
        <Link
          to="/add-tax-document"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded shadow-md"
        >
          + Add New Document
        </Link>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading documents...</p>
      ) : (
        <div className="documents-list bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-indigo-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Document ID</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr
                  key={doc._id}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="px-4 py-2">{doc.documentId}</td>
                  <td className="px-4 py-2">${doc.amount}</td>
                  <td className="px-4 py-2">
                    {doc.date
                      ? new Date(doc.date).toLocaleDateString()
                      : 'Invalid Date'}
                  </td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      doc.status.toLowerCase() === 'pending'
                        ? 'text-yellow-500'
                        : 'text-green-600'
                    }`}
                  >
                    {doc.status}
                  </td>
                  <td className="px-4 py-2 flex space-x-2">
                    <Link
                      to={`/update-tax-document/${doc._id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded shadow-md"
                    >
                      Update
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded shadow-md"
                      onClick={() => handleDelete(doc._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TaxDocuments;