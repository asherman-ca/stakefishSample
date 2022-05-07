import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Nav from './components/Navbar'


function App() {
  return (
    <>
      <Router>
        <Nav />
      </Router>
    </>
  );
}

export default App;
