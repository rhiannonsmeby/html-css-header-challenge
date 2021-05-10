import './App.css';
import {Route} from 'react-router';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
       <Route path="/" component={Header} />
    </div>
  );
}

export default App;
