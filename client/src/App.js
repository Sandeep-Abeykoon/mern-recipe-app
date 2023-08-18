import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import { Home } from "./pages/home";
import { CreateRecipe } from "./pages/create-recipe";
import { SavedRecipes } from "./pages/saved-recipes";
import { Auth } from "./pages/auth"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <div className="App">
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create-recipe" element={<CreateRecipe/>}/>
        <Route path="/saved-recipes" element={<SavedRecipes/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </Router>
 
  </div>
  );
}

export default App;
