import logo from './logo.svg';
import './App.css';

console.log(process.env.REACT_APP_KEY)

function App()
{
  return (
    <div className="App">
      <h1>{process.env.KEY}</h1>
    </div>
  );
}

export default App;
