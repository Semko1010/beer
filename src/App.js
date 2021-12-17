import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Conponent/Home'
import ApiBeer from './Conponent/api/ApiBeer'
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <header>
        
      </header>
      
      <Routes>
        
        <Route path ="/" element={<Home/>}/>
        <Route path ="/all" element={<ApiBeer/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
