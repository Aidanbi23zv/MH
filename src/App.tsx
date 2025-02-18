import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <h1 id="title">Supportive Solutions</h1>
    </div>
    <div>
      <a id="urgent">URGENT HELP</a>
    </div>
    </>
  );
}

export default App;
