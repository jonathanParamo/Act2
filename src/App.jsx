import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import EditUser from './components/EditUser';
import AnotherView from './components/AnotherView';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='home'>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/edit/:userId" element={<EditUser />} />
          <Route path="/another-view" element={<AnotherView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
