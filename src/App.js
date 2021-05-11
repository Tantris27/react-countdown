import { Timer } from './Timer';

function App() {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'space-around',
        alignContent: 'space-around',
      }}
    >
      <h1>Countdown to Christmas</h1>
      <Timer />
    </div>
  );
}

export default App;
