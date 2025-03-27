import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import BlogDetails from "./Pages/BlogDetails";
import CreateBlog from "./Pages/CreateBlog";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
