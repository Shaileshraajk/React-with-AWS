import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ViewEmployee from './employees/ViewEmployee';
import AddEmployee from './employees/AddEmployee';
import EditEmployee from './employees/EditEmployee';
import DeleteEmployee from './employees/DeleteEmployee';

function App() {
  return (
    <div>
      
      <Router>
      <Switch>

      <Route path={"/viewempl/:id"}>
          <ViewEmployee />
        </Route>

      <Route path={"/editempl/:id"}>
        <EditEmployee />
      </Route>

      <Route path={"/deleteempl/:id"}>
        <DeleteEmployee />
      </Route>


        <Route path={"/addEmpl"}>
          <AddEmployee />
        </Route>

        <Route path={"/rglist"}>
          <Home />
        </Route>  

        <Route path={"/"}>
          <Homepage />
        </Route>

        

        


      </Switch>

      </Router>
      
    </div>
  );
}

export default App;
