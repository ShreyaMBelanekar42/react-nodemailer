const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    email: {type: String, unique: true},
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsSchema);
