import multer from "multer";
import path from "path";

// 1️⃣ Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // Get file extension
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

// 2️⃣ File Filter for Validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf/; // Allow only these file types
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG, PNG, and PDF files are allowed!"));
  }
};

// 3️⃣ Multer Instance with Limits
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max file size: 5 MB
});

export default upload;
