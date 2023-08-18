import "./style.css";
import Navbar from "./components/navbar";
import { Home } from "./pages/home";

function App() {
  return (
  <div className="App">
    <Navbar/>
    <Home/>
  </div>
  );
}

export default App;
