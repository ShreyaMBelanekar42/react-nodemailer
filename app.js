const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const router = require("./routes/router");
app.use(router)

const mongoUrl =
  "";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((e) => console.log(e));

app.listen(5000, () => {
  console.log("server started");
});

require("./userDetails");

const User = mongoose.model("UserInfo");

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = User.findOne({ email });
    if (oldUser) {
      res.send({ error: "User Exists" });
    }
    await User.create({
      email,
    });
    res.send({ status: "OK" });
  } catch (error) {
    res.send({ status: "error" });
  }
});
