import './App.css';
import logo from './assets/react.svg';

function App() {
  const createRectangle = () => {

    parent.postMessage(
      { pluginMessage: { type: 'create-rectangles', count: 10 } },
      '*'
    );
  };

  return (
    <div className="app">
      <img src={logo} alt="logo" />
      <button onClick={createRectangle}>Create Rectangle</button>
    </div>
  );
}

export default App;
