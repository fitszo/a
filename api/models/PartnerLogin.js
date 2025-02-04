import mongoose from 'mongoose';

const PartnerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contactNo: String,
  ownerName: String,
  gstin: String,
  fitnessZone: {
    launched: { type: Boolean, default: false },
    details: {
      gymName: String,
      address: {
        street: String,
        pincode: String,
        city: String,
        district: String,
        state: String,
        locationLink: String
      },
      documents: {
        infrastructureImage: String,
        governmentDoc: String
      },
      status: { type: String, default: 'pending' }  // pending, approved, rejected
    }
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Partner', PartnerSchema, "partner_logins");
