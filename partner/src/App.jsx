import './App.css'
import LogIn from './page/LogIn';
import { Route, Routes } from "react-router-dom";
import Register from './page/Register';
import AdminDashboard from './page/admin/adminpage';
import AdminLog from './page/admin/AdminLog';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Register />} />
        <Route path="/login" element={<AdminLog />} />
        <Route path="/adminpage" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App