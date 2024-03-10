const mongoose = require('mongoose');


const productCategorySchema = new mongoose.Schema({
  name: String,
  desc: String,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date,
});


const productInventorySchema = new mongoose.Schema({
  quantity: Number,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date,
});


const discountSchema = new mongoose.Schema({
  name: String,
  description: String,
  discount_percent: Number,
  active: Boolean,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date,
});


const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  SKU: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_Category' },
  inventory: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_Inventory' },
  price: Number,
  discount: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date,
});





