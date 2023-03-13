import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import People from './Components/People/People';
import Planet from './Components/Planet/Planet';

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/planet" element={<Planet />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
