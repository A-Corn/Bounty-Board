import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Interviews from "./components/Interviews";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/interviews' element={<Interviews/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
