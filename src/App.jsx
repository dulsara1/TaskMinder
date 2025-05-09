import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import TaxDocuments from './components/TaxDocuments';
import AddTaxDocument from './components/AddTaxDocument';
import UpdateTaxDocument from './components/UpdateTaxDocument';
import AboutUs from './components/AboutUs';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tax-documents" element={<TaxDocuments />} />
        <Route path="/add-tax-document" element={<AddTaxDocument />} />
        <Route path="/update-tax-document/:id" element={<UpdateTaxDocument />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;