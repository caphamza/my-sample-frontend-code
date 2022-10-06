import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "layout";
import { Workshop, WorkshopDetails } from "pages";

export const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <div className="sidebar-main-align">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Workshop />} />
          <Route path="/workshop/:id" element={<WorkshopDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
