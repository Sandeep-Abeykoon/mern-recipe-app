import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import { Home } from "./pages/home";
import { CreateRecipe } from "./pages/create-recipe";
import { SavedRecipes } from "./pages/saved-recipes";
import { Auth } from "./pages/auth"
import { Signup } from "./pages/signup";
import { ViewRecipe } from "./pages/viewRecipe";

import "./pages/styles/common.css";
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
        <Route path = "/viewRecipe/:recipeID?" element={<ViewRecipe/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
 
  </div>
  );
}

export default App;
