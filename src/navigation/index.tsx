import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "layout";

export const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </Router>
  );
};
