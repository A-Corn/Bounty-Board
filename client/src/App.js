import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootswatch/dist/superhero/bootstrap.min.css";
import './App.css';
import LandingPage from "./components/LandingPage";
import SubmissionForm from "./components/Submissions/SubmissionForm";
import Submission from "./components/Submissions/Submission";
import Networking from "./components/Networking/Networking";
import NetworkingForm from "./components/Networking/NetworkingForm";
import Interviewers from "./components/Interviews/Interviewers";
import InterviewForms from "./components/Interviews/InterviewForms";

function App() {
  return (
    <div className="App">
            
            <ul className = "nav navbar-expand lg nav-tabs justify-content-center nav-justified " >
                <div className = "logo pt-2 bg-light" >
                  <a href="" className="navbar-brand pt-2"> Bounty Board</a>
                </div>
              < li className = "nav-item">
                <a className="nav-link"  data-toggle="tab" href='/api/submissions'>Submissions</a>
              </li>
              < li className = "nav-item" >
                <a className="nav-link" data-toggle="tab" href='/api/interviews'>Interviews</a>
              </li>
              < li className = "nav-item" >
                <a className="nav-link" data-toggle="tab" href='/api/network_contacts'>Networking</a>
              </li>
              < li className = "nav-item" >
                <a className="nav-link" data-toggle="tab"  href='/api/logout'>Logout</a>
              </li>
            </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/api/submissions" element={<Submission />}/>
          <Route path="/api/add/submissions" element={<SubmissionForm />} />
          <Route path="/api/network_contacts" element={<Networking />} />
          <Route path="/api/network_form" element={<NetworkingForm />} />
          <Route path="/api/interviews" element={<Interviewers/>} />
          <Route path="/api/interview_form" element={<InterviewForms/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
