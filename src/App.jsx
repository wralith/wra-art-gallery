import Navbar from "./components/Layout/Navbar";
import BgWrapper from "./components/UI/BgWrapper";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import RandomArts from "./components/Routes/RandomArts";

const AnimatedSwitch = () => {
  const location = useLocation();
  console.log("location", location);
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} exit={false} classNames="fade" timeout={600}>
        <Routes>
          <Route path="/" element={<Header />} exact />
          <Route path="/random-arts" element={<RandomArts />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <BgWrapper>
      <Navbar />
      <AnimatedSwitch />
    </BgWrapper>
  );
}

export default App;
