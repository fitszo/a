// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { setToken } from "../../utils/auth";
// import "./hello.css";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     const response = await fetch("https://server.fitszo.com/api/admin/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       setToken(data.token, "admin");
//       navigate("/admin/dashboard");
//     } else {
//       setError(data.message);
//     }
//   };

//   return (
//     <>
//       <div className="background-black">
//         <div className="admin-container">
//           <h2 className="admin-h2">Admin Login</h2>
//           <form onSubmit={handleLogin} className="admin-form">
//             <div className="input-group-admin">
//               <label for="email" className="input-group-admin-label">
//                 Email
//               </label>
//               <input
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="input-group-admin-input"
//               />
//             </div>
//             <div className="input-group-admin">
//               <label for="password" className="input-group-admin-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="input-group-admin-input"
//               />
//             </div>
//             <button type="submit" className="admin-login-button">
//               Login
//             </button>
//             {error && <p className="admin-login-error">{error}</p>}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
