import './App.css';
import Sidebar from './Sidebar';
import Profile from './Profile';
// import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {Routes,Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Tasks from './Tasks';
import Myproject from './Myproject';
import Work from './Work';
import Leaves from './Leaves';
import Bankdetails from './Bankdetails';
import Logout from './Logout';

function App() {
  return (
    <Router>
      <div className="App">
         {/* <Topbar /> */}
         <Row>
          <Col sm={3}>
        <Sidebar />
        </Col>
        <Col sm={9}>
        <Routes>
       <Route path='/' element={<Dashboard />}/>
       <Route path='/Profile' element={<Profile />}/>
       <Route path='/Tasks' element={<Tasks />}/>
       <Route path='/Myproject' element={<Myproject />}/>
       <Route path='/Work' element={<Work />}/>
       <Route path='/Leaves' element={<Leaves />}/>
       <Route path='/Bankdetails' element={<Bankdetails />}/>
       <Route path='/Logout' element={<Logout />} />
        </Routes>
        </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;