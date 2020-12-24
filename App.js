import { BrowserRouter as Router , Route  } from 'react-router-dom';
import './App.css';


import listitems from './components/listitems';
import addListItems from './components/addListItems';
import ShowListItems from './components/showlistitems';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
     
    <Router>

    <switch>

      <Route path="/listitems" component={listitems} />
      <Route path="/addlistitems" component={addListItems} />
      <Route path="/showlistitems" component={ShowListItems} />
      <Route path="/navbar" component={Navbar} />
      
    </switch>

   </Router>



    </div>
  );
}

export default App;