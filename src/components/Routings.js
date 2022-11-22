import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Headrer from "../header/Header";
import Home from "./Home";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import ProDetail from "../Products/ProDetail";
import AddNewPro from "../Products/AddNewPro";
import Dashboard from "../Products/Dashboard";
import History from "../Products/History";

export default function Routings() {
  return (
    <Router>
      <div>
        <Headrer />
        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/dashboard/waiting" element={<AddNewPro />} />
          <Route path="/dashboard/approved" element={<AddNewPro />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newProduct" element={<AddNewPro />} />
          <Route path="/productDetail" element={<ProDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
