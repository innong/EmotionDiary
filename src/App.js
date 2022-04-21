import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutTest from './components/RouteTest';

import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>app.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RoutTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
