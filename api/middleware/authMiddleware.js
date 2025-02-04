import jwt from "jsonwebtoken";

// Partner Authentication Middleware
export const verifyPartner = (req, res, next) => {
  const token = req.cookies.partnerToken;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });
    req.partnerId = decoded.id;
    next();
  });
};

// Admin Authentication Middleware
export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });
    req.adminId = decoded.id;
    next();
  });
};