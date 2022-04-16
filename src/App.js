import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return(
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
   
  )
  
}

export default App;



