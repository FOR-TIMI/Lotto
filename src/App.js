
import './App.css';
import Lottery from './lottery';

function App() {
  return (
    <div className="App">
     <Lottery/>
     <Lottery title="Mini Daily" maxNum={10} numBalls={4}/>
    </div>
  );
}

export default App;
