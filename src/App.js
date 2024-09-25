import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Fun from "./Component/Fun";
import Health from "./Component/Health";
import Career from "./Component/Career";
import Finance from "./Component/Finance";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Fun" element={<Fun />}></Route>
        <Route path="/Health" element={<Health />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/Finance" element={<Finance />}></Route>
      </Routes>
      {/* <Route path="/Fun" component={Fun} />
      <Route path="/Health" component={Health} />
      <Route path="/Career" component={Career} />
      <Route path="/Finance" component={Finance} /> */}

      {/* <Home /> */}
      {/* <Features /> */}
    </div>
  );
}

export default App;
