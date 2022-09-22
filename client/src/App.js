import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './components/bootstrap.min.css';
import './App.css';
import LandingPage from "./components/LandingPage";
import SubmissionForm from "./components/Submissions/SubmissionForm";
import Submission from "./components/Submissions/Submission";
import Networking from "./components/Networking/Networking";
import NetworkingForm from "./components/Networking/NetworkingForm";
import Interviewers from "./components/Interviews/Interviewers";
import InterviewForms from "./components/Interviews/InterviewForms";
import SignUp from "./components/SignUp";
import Interviews from "./components/Interviews";
import Login from "./components/Login";
import EditSubmission from "./components/Submissions/EditSubmission";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>          
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/submissions" element={<Submission />}/>
          <Route path="/add/submissions" element={<SubmissionForm />} />
          <Route path="/network_contacts" element={<Networking />} />
          <Route path="/network_form" element={<NetworkingForm />} />
          <Route path="/interviews" element={<Interviewers/>} />
          <Route path="/interview_form" element={<InterviewForms/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/interviews' element={<Interviews/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/submissions/edit/:id" element={<EditSubmission />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
