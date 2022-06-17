import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
