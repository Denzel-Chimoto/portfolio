import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CollapsibleExample from './components/NavBar';
import Home from './pages/Home';
import './App.css';
import ContactLinks from './components/ContactLinks';
import SmartPharm from './pages/pages/smart-pharmacy';
import CABSManuals from './pages/pages/reconciliation';
import NRZBook from './pages/pages/nrzbooking';
import ProfitPredictor from './pages/pages/profit-predictor';

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
          <Route path="/profpredictor" element={<ProfitPredictor/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
