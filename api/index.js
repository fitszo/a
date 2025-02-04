const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";


const Partners_data = require('../api/models/Partners_data');
const ContactUs = require('../api/models/Contactus');
const partnerRoutes = require("./routes/partnerRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();


dotenv.config();
const PORT = process.env.PORT || 5000
const MONGO = process.env.MONGO_API_KEY
const SESSION_SECRET = process.env.SESSION_SECRET
const NODE_ENV = process.env.NODE_ENV

app.use(express.json());

app.use(
  cors({
    origin: ["https://www.fitszo.com", "https://partner.fitszo.com"],
    methods: ["GET", "POST"],
    credentials:true,
  })
);

app.use(cookieParser());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO, // MongoDB connection
      collectionName: "sessions", // Optional: Custom session collection name
      ttl: 60 * 60, // Session expiration time in seconds (1 hour)
    }),
    cookie: {
      maxAge: 3600000, // 1 hour in milliseconds
      httpOnly: true,
      secure: NODE_ENV === "production", // Secure cookies in production
    },
  })
);

mongoose.connect(MONGO).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

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

app.use("/api/partner", partnerRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));