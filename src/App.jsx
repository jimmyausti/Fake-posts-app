import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";

function App() {
  return (
    <Router>
      <h1>Postit</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
