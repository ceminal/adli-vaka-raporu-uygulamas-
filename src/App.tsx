import './App.css'
import Home from './pages/Forms/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormResults from './pages/Results/FormResults';
import HastaBilgileriFormu from './pages/Forms/HastaBilgileriFormu';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/form-results"
            element={<FormResults />}
          />
          <Route path="hasta-bilgileri-formu" element={<HastaBilgileriFormu />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
