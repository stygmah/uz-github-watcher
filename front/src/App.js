import './App.scss';
import Body from './components/Body/Body.component';
import Navbar from './components/Navbar/Navbar.component';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Body/>
        
        </Router>
    </div>
  );
}

export default App;
