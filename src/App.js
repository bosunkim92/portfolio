import './App.css';
import Particles from "./Components/Particles/Particles";
import Greeting from "./Components/Greeting/Greeting";
import Skills from "./Components/Skills/Skills";
import RecentWork from "./Components/RecentWork/RecentWork"

function App() {
  return (
    <div className="App">
      <Greeting />
      <Skills />
      <RecentWork />
      <Particles />
    </div>
  );
}

export default App;
