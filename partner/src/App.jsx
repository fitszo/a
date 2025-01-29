import './App.css'
import LogIn from './page/LogIn';
import { Route, Routes } from "react-router-dom";
import Register from './page/Register';
import AdminDashboard from './page/admin/adminpage';
import AdminLog from './page/admin/AdminLog';
import Dashboard from './page/DashBoard';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<LogIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/admin/login" element={<AdminLog />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;