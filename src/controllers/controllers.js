import { TaxDocument } from '../models/models.js';

// Create a new tax document
export const createTaxDocument = async (req, res) => {
  try {
    const newDocument = new TaxDocument(req.body);
    const savedDocument = await newDocument.save();
    res.status(201).json(savedDocument);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tax documents
export const getAllTaxDocuments = async (req, res) => {
  try {
    const documents = await TaxDocument.find().sort({ createdAt: -1 });
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single tax document
export const getTaxDocument = async (req, res) => {
  try {
    const document = await TaxDocument.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Tax document not found' });
    }
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a tax document
export const updateTaxDocument = async (req, res) => {
  try {
    const updatedDocument = await TaxDocument.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedDocument) {
      return res.status(404).json({ message: 'Tax document not found' });
    }
    res.status(200).json(updatedDocument);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a tax document
export const deleteTaxDocument = async (req, res) => {
  try {
    const deletedDocument = await TaxDocument.findByIdAndDelete(req.params.id);
    if (!deletedDocument) {
      return res.status(404).json({ message: 'Tax document not found' });
    }
    res.status(200).json({ message: 'Tax document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get tax documents statistics
export const getTaxStats = async (req, res) => {
  try {
    const stats = await TaxDocument.aggregate([
      {
        $group: {
          _id: null,
          totalTaxPaid: { $sum: "$taxAmount" },
          pendingDocuments: { 
            $sum: { 
              $cond: [{ $eq: ["$status", "Pending"] }, 1, 0] 
            } 
          },
          paidDocuments: { 
            $sum: { 
              $cond: [{ $eq: ["$status", "Paid"] }, 1, 0] 
            } 
          },
          overdueDocuments: { 
            $sum: { 
              $cond: [{ $eq: ["$status", "Overdue"] }, 1, 0] 
            } 
          }
        }
      }
    ]);
    
    res.status(200).json({
      totalTaxPaid: stats[0]?.totalTaxPaid || 0,
      pendingDocuments: stats[0]?.pendingDocuments || 0,
      paidDocuments: stats[0]?.paidDocuments || 0,
      overdueDocuments: stats[0]?.overdueDocuments || 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};