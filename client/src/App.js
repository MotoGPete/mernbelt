import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import PetsEdit from "./views/PetsEdit"
import PetsDetail from "./views/PetsDetail"
import PetsForm from "./views/PetsForm"
import PetsDash from "./views/PetsDash"

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <hr/>
      
      <BrowserRouter>
        <Switch>
        <Route path="/pets/new">
            <PetsForm/>
          </Route>
          <Route path="/pets/:id/edit">
            <PetsEdit/>
          </Route>
          <Route path="/pets/:id/">
            <PetsDetail/>
          </Route>
          
          <Route path ="/">
            <PetsDash/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
