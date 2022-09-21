import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";

import Interviews from "./components/Interviews";
=======
import Login from "./components/Login";
import ResumeList from "./components/ResumeList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path='/signup' element={<SignUp/>}/>

          <Route path='/interviews' element={<Interviews/>}/>
=======
          <Route path="/login" element={<Login />}/>
          <Route path="/submissions" element={<ResumeList />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
