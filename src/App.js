import { StrictMode, useState } from 'react';
import { AppContext } from './context';
import './App.css';
import AppRouter from './routes/AppRouter';

function App() {

  const [user, setUser] = useState(null)

  return (
    <StrictMode>
      <AppContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </AppContext.Provider>
    </StrictMode>
  );
}

export default App;
