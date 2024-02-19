
import './index.scss'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import Clients from './pages/Clients';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
    </div>
  );
}

export default App;
