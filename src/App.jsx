import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CollapsibleExample from './components/NavBar';
import Home from './pages/Home';
import './App.css';
import ContactLinks from './components/ContactLinks';
import SmartPharm from './pages/Proj-SmartPharm';
import CABSManuals from './pages/Proj-ResearchPaper';
import NRZBook from './pages/Proj-NRZBook';

function App() {
  return (
    <Router>
      <div className='Denzy'>
        <CollapsibleExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/smartpharm" element={<SmartPharm />} />
          <Route path="/cabsmanuals" element={<CABSManuals/>}/>
          <Route path="/nrzbooking" element={<NRZBook/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
