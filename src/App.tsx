import Container from "@mui/material/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import PrimarySearchAppBar from './components/navbar/Navbar';
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <PrimarySearchAppBar/>
        
        <Container maxWidth="md" style={{ backgroundColor: '#eee' }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="products" element={<Products />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              } />
            </Routes>
        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
