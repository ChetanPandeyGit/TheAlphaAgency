import './App.css'
import { BrowserRouter, Routes,  Route, Link, Outlet } from 'react-router-dom';
import FullMoon from "./components/FullMoon";
import PartialMoon from "./components/PartialMoon";
import Nirvana from "./components/Nirvana";
import HalfAndBrain from './components/HalfAndBrain';
import HeartSection from './components/HeartSection';

const App = () => {
  return (
    <div className="project">
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">First</Link>
          </li>
          <li>
            <Link to="/fullmoon">Second</Link>
          </li>
          <li>
            <Link to="/brain">Third</Link>
          </li>
          <li>
            <Link to="/heart">Forth</Link>
          </li>
          <li>
            <Link to="/nirvana">Fifth</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>

      <Routes>
        <Route path="/" exact element={<PartialMoon/>} />
        <Route path="/fullmoon" element={<FullMoon/>} />
        <Route path="/brain" element={<HalfAndBrain/>} />
        <Route path="/heart" element={<HeartSection/>} />
        <Route path="/nirvana" element={<Nirvana/>} />
      </Routes>
    </BrowserRouter>
      {/* <div className="section"><Nirvana/></div> */}
    </div>
  );
};

export default App;



