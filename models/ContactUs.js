const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true  },
        mobile: { type: Number, required: true},
        comment: { type: String, required: true},
        added_on: { type: String}
      },
  { timestamps: true }
);

module.exports = mongoose.model("ContactUs", ContactUsSchema);
