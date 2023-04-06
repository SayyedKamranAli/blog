import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/CreateBlog";
import Bloglist from "./pages/Bloglist";
import Blog from "./pages/Blog";
import Layout from "./pages/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Bloglist />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="/create-blog" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
