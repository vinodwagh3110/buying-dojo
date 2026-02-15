const mongoose = require("mongoose");

const pickSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, required: true },
    budget: { type: Number, required: true },
    useCase: { type: String, required: true },
    urgency: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pick", pickSchema);
