import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';
import MeetingPage from './Components/MeetingPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/:id' element={<MeetingPage />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
