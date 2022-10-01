import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "layout";

export const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/design" element={<>Component</>} />
        </Routes>
      </Sidebar>
      <Footer />
    </Router>
  );
};
