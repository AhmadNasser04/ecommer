import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/global/NavBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
