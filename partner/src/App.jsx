import './App.css'
import LogIn from './page/LogIn';
import Admin from './page/admin/admin';
import { Route, Routes } from "react-router-dom";
import Register from './page/Register';

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