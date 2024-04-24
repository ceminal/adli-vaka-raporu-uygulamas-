import './App.css'
// import Home from './pages/Forms/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormResults from './pages/Results/FormResults';
import FormInputs from './pages/Forms/FormInputs';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormResults />} />
          {/* <Route
            path="/form-results"
            element={<FormResults />}
          /> */}
          <Route path="form-inputs" element={<FormInputs />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
