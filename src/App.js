import logo from './logo.svg';
import './App.css';

//import propios
import Marcas from './components/marcas'

//importamos el router
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import { useStateValue } from './state/provider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? <Login />
        :(
          <BrowserRouter>
            <Routes>
              <Route path='/' element={ <Marcas/>} />
              <Route path='/Marcas' element={ <Marcas/>} />
            </Routes>
          </BrowserRouter>
        )
      }
    </div>
        
  );
}

export default App;
