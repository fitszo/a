import './App.css'
import LogIn from './page/LogIn';
import { Route, Routes } from "react-router-dom";
import Register from './page/Register';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Register />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App