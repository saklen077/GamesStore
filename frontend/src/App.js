import "./App.css";
import Home from "../src/Home/Home";
import Games from "../src/Games/Games";
import Signup from "./assets/components/Signup";
import Contacts from "../src/Contact/Contacts"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" exact element={<Games />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/contact" exact element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
