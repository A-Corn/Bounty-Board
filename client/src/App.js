import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import ResumeList from "./components/ResumeList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/submissions" element={<ResumeList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
