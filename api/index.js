const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Partners_data = require('../api/models/Partners_data');
const ContactUs = require('../api/models/Contactus');
const Partner = require('../api/models/PartnerLogin');
const AdminLogin = require('../api/models/AdminLogin')

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000
const MONGO = process.env.MONGO_API_KEY

app.use(express.json());

// const allowedOrigins = [
//   "https://www.fitszo.com",
//   "https://partner.fitszo.com",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     methods: ["GET", "POST"],
//     credentials: true, 
//   })
// );

app.use(
  cors({
    origin: ["https://www.fitszo.com", "https://partner.fitszo.com"],
    methods: ["GET", "POST"],
  })
);

mongoose.connect(MONGO,
    console.log('connected to mongodb')
)

app.get('/', (req, res) => {
    res.json("Hello this is the backend");
})

app.post("/gyminfo", async (req, res) => {

    const data = {
        "Partner_name": req.body.username,
        "contact_no": req.body.contactno,
        "Partner_mail": req.body.mail,
    }

    try {
        const data_status = await Partners_data.create(data);
        res.json(data_status);
        console.log(data_status);
        res.status(200)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error)
    }

})

app.post("/contactus", async (req, res) => {
  const data = {
    name: req.body.name,
    contactno: req.body.contactno,
    mail: req.body.mail,
    massege: req.body.massege,
  };

  try {
    const data_status = await ContactUs.create(data);
    res.json(data_status);
    console.log(data_status);
    res.status(200);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

app.post("/partner-register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Partner.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = password;
    const newPartner = new Partner({ email, password: hashedPassword });
    await newPartner.save();

    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

app.post("/partner-login", async (req, res) => {
  const { email, password } = req.body;
  const partner = await Partner.findOne({ email });

  if (!partner) return res.status(400).json({ message: "User not found" });

  if (partner.password !== password)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: partner._id }, "secret", { expiresIn: "1h" });
  res.json({ token, partner });
});


app.post("/admin-login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminLogin.findOne({ email });

  if (!admin) return res.status(400).json({ message: "Admin not found" });

  if (admin.password !== password)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: admin._id }, "secret", { expiresIn: "1h" });
  res.json({ token, admin });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));