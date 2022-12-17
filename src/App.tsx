import { useState, useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Progress } from './components/Progress';
import { useNow } from './hooks/useNow';

function App() {
  const { now } = useNow();
  const [smohked, setSmohked] = useState(0);
  const interval = 15 * 60 * 1000;
  const lastSmkd = new Date(2022, 11, 17, 21, 45).valueOf();
  const elapsed = now - lastSmkd;
  const leftSeconds = Math.max(interval - elapsed, 0) / 1000;
  const leftMinutes = Math.ceil(leftSeconds / 60);
  const progress = Math.min(elapsed / interval, 1);
  const text = leftSeconds < 60 ? `${leftSeconds}s` : `${leftMinutes}m`;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Smoq + Smohk</h1>
      <Progress
        size={32}
        progress={progress}
        text={text}
        className="mx-auto mt-16"
      />
    </div>
  );
}

export default App;
