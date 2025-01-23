import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import IndexPage from "./page/IndexPage/IndexPage";
import JoinUs from "./page/JoinPateron/JoinUs";
import AboutUs from "./page/AboutUs/AboutUs";
import ContactUs from "./page/ContactUs/ContactUs";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
