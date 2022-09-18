import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
