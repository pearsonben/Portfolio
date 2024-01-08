import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer />
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
