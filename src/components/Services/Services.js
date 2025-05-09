import axios from 'axios';

const URL = "http://localhost:5079/tax-documents/";

// Base URL for the backend API
const BASE_URL = 'http://localhost:5079/api';

// Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Error handler for API requests
const handleApiError = (error, operation) => {
  if (error.code === 'ERR_NETWORK') {
    console.error(`Network error during ${operation}:`, error);
    throw new Error('Cannot connect to the server. Please try again later.');
  }
  if (error.response) {
    console.error(`Error during ${operation}:`, error.response.data);
    throw new Error(error.response.data.message || `Failed to ${operation}`);
  }
  console.error(`Unexpected error during ${operation}:`, error);
  throw new Error('An unexpected error occurred. Please try again.');
};

// Fetch all tax documents
export const getAllTaxDocuments = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tax documents');
  }
};

// Create a new tax document
export const createNewTaxDocument = async (taxDocumentData) => {
  try {
    const response = await axiosInstance.post('/tax-documents', taxDocumentData);
    return response.data;
  } catch (error) {
    handleApiError(error, 'creating a tax document');
  }
};

// Update an existing tax document
export const updateTaxDocumentById = async (id, taxDocumentData) => {
  try {
    const response = await axiosInstance.put(`/tax-documents/${id}`, taxDocumentData);
    return response.data;
  } catch (error) {
    handleApiError(error, 'updating a tax document');
  }
};

// Delete a tax document by ID
export const deleteTaxDocumentById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5079/tax-documents/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete tax document');
  }
};