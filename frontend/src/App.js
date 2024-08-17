import logo from './logo.svg';
import './App.css';

function App()
{
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_KEY}</h1>
    </div>
  );
}

export default App;
