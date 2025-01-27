import './App.css'
import LogIn from './page/LogIn';
import { Route, Routes } from "react-router-dom";
import Register from './page/Register';
import Admin from './page/admin/AdminLog';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Register />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  );
}

export default App