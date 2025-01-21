const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const Partners_data = require('../api/models/Partners_data');
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000
const MONGO = process.env.MONGO_API_KEY

app.use(express.json());

app.use(cors({
    origin: "https://fitszo-client.vercel.app",
    methods: ["GET", "POST"]
}
));

mongoose.connect(MONGO,
    console.log('connected to mongodb')
)

app.get('/', (req, res) => {
    res.json("Hello this is the backend");
})

app.post("/postgymdata", async (req, res) => {

    const data = {
        "Partner_name": req.body.username,
        "contact_no": req.body.contactno,
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

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));