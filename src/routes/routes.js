import express from 'express';
import {
  createTaxDocument,
  getAllTaxDocuments,
  getTaxDocument,
  updateTaxDocument,
  deleteTaxDocument,
  getTaxStats
} from '../controllers/controllers.js';

const router = express.Router();

// Tax documents routes
router.post('/tax-documents', createTaxDocument);
router.get('/tax-documents', getAllTaxDocuments);
router.get('/tax-documents/:id', getTaxDocument);
router.put('/tax-documents/:id', updateTaxDocument);
router.delete('/tax-documents/:id', deleteTaxDocument);

// Statistics route
router.get('/tax-stats', getTaxStats);

export default router;