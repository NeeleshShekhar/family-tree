// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FamilyTree from "./components/FamilyTree";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { History } from "./components/History/History";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/family-tree" element={<FamilyTree />} />{" "}
          <Route path="/history" element={<History />} />{" "}
          {/* FamilyTree route */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
