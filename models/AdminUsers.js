const mongoose = require("mongoose");

const AdminUsersSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String},
        email: { type: String, required: true, unique: true  },
        mobile: { type: Number},
        status: { type: Number}
      },
  { timestamps: true }
);

module.exports = mongoose.model("AdminUsers", AdminUsersSchema);
