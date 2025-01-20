const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/User.js");
const Contact = require("./models/Contactus.js");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
        res.json("test ok");
});

app.post('/register', async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      phone,
    });
    res.json(userDoc)
  } catch (e) {
    res.status(422).json(e);
  }
})

app.post("/contact", async (req, res) => {
  const { name, email, phone , massage } = req.body;
  try {
    const contactDoc = await Contact.create({
      name,
      email,
      phone,
      massage,
    });
    res.json(contactDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.listen(4000);