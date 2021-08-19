import './App.css';
import Particles from "./Components/Particles/Particles";
import Greeting from "./Components/Greeting/Greeting";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Greeting />
      <Skills />
      <Particles />
    </div>
  );
}

export default App;
