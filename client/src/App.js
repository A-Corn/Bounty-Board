import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import SubmissionForm from "./components/Submissions/SubmissionForm";
import Submission from "./components/Submissions/Submission";

function App() {
  return (
    <div className="App">
            
            < ul className = "nav nav-tabs justify-content-center nav-justified " >
              < li className = "nav-item">
                <a className="nav-link"  data-toggle="tab" href='/api/submissions'>Submissions</a>
              </li>
              < li className = "nav-item" >
                <a className="nav-link" data-toggle="tab" href="#">Interviews</a>
              </li>
              < li className = "nav-item" >
                <a className="nav-link" data-toggle="tab" href="#">Networking</a>
              </li>
              < li className = "nav-item" >
                <a className="nav-link" data-toggle="tab"  href="/">Logout</a>
              </li>
            </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/api/submissions" element={<Submission />}/>
          <Route path="/api/add/submissions" element={<SubmissionForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
