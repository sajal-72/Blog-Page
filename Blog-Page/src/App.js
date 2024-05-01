import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/pages/home/Home";
import Single from "./Components/pages/single/Single";
import Write from "./Components/pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Single1 from "./Components/pages/single/Single1";
import Login from "./Components/login/Login";
import Login1 from "./Components/login/Login1";

function App() {
  return (
    <>
    <Router>
      {/* <Navbar/>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/write" element={<Write />} />
        <Route path="/post" element={<Single />} />
        <Route path="/post1" element={<Single1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login1" element={< Login1/>} />

      </Routes> */}
    </Router>

    </>
  
  );
}

export default App;
