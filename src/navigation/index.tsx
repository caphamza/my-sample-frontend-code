import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "layout";
import { Workshop, WorkshopDetails } from "pages/";

export const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Workshop />} />
          <Route path="/workshop/:id" element={<WorkshopDetails />} />
        </Routes>
      </Sidebar>
      <Footer />
    </Router>
  );
};
