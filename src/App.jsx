import Navbar from "./components/Layout/Navbar";
import BgWrapper from "./components/UI/BgWrapper";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RandomArts from "./components/Routes/RandomArts";

function App() {
  return (
      <BgWrapper>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />}/>
          <Route path='/random-arts' element={<RandomArts />}/>
        </Routes>
      </BgWrapper>
  );
}

export default App;
