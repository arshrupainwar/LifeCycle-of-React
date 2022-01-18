import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome";
import LifeCycleA from './LifeCycleA';

function App() {
  return (
    <div className="App">
      {/* when this component gets called during runtime then MOUNTING Phase is working */}
      {/* <Welcome /> */}
      <LifeCycleA/>
    </div>
  );
}

export default App;
