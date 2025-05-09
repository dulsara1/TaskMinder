import mongoose from 'mongoose';

const taxDocumentSchema = new mongoose.Schema({
  nicNumber: { type: String, required: true },
  passportNumber: { type: String },
  fullNameEnglish: { type: String, required: true },
  fullNameNative: { type: String },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], default: 'Male' },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  taxAmount: { type: Number, required: true },
  documentType: { 
    type: String, 
    enum: ['Income Tax', 'Property Tax', 'VAT', 'Other'],
    required: true 
  },
  year: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Paid', 'Overdue'], 
    default: 'Pending' 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const TaxDocument = mongoose.model('TaxDocument', taxDocumentSchema);

export { TaxDocument };