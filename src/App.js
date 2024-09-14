import logo from './logo.svg';
import './App.css';
import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import EditUsers from './components/EditUsers';

function App() {
  return (
    <div className="App">
      <h1>Hellow React CRUD Operation using PHP API and MYSQL</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>List Users</Link></li>
            <li><Link to='user/create'>Create User</Link></li>
            <li><Link to='user/:id/edit'>Edit User</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route index element={<ListUsers />} />
        <Route path='user/create' element ={<CreateUser />} />
        <Route path='user/:id/edit' element ={<EditUsers />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
