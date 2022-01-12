import logo from './logo.svg';
import './App.scss';
import MyComponent from './components/MyComponent.js';
import FormComponent from './components/FormComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyComponent /> */}
        <FormComponent />
      </header>
    </div>
  );
}

export default App;
