import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes.js'
import { useState } from 'react';
function App() {
  const [busca, setBusca] = useState("")
  const routing = useRoutes(routes(busca, setBusca));

  return (
    <div className='App'>
      {routing}
    </div>
  );
}

export default App;
