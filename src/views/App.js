import logo from './logo.svg';
import '../styles/App.scss';
import MyComponent from './components/MyComponent.js';
import FormComponent from './components/FormComponent.js';
import ListToDo from './todos/ListToDo.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './nav/Navigation.js';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListUser from './users/ListUser.js';
import DetailUser from './users/DetailUser.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/my" element={<MyComponent />}></Route>
            <Route path="/todos" element={<ListToDo />}></Route>
            <Route path="/form" element={<FormComponent />}></Route>
            <Route path="/user" element={<ListUser />}></Route>
            <Route path="/user/:id" element={<DetailUser />}></Route>
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
