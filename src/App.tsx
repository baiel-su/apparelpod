import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import Bulk from "./pages/bulk";
import ContactUs from "./components/contactUs/contactUs";
import ContactUsInfo from "./components/contactUs/contactUsInfo";

function App() {
  return (
    // change it later
    <div className="max-w-[1224px] bg-[#e7e7e7] m-auto text-[#07415E] flex justify-between flex-col p-5">
      <Navbar />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bulk" element={<Bulk />} />
          </Routes>
        </Router>
        <ContactUs />
      </div>
      <ContactUsInfo />
    </div>
  );
}

export default App;
