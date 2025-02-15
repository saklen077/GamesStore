import "./App.css";
import Home from "../src/Home/Home";
import Games from "../src/Games/Games";
import Signup from "./assets/components/Signup";
import Contacts from "../src/Contact/Contacts"
import { Navigate, Route, Routes } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser,setAuthUser]= useAuth();
  console.log(authUser);
  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" exact element={authUser ? <Games /> : <Navigate to="/signup"/>} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/contact" exact element={<Contacts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
