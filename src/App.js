import "./App.scss";
import { useEffect, useState } from "react";
import NameCard from "./components/NameCard";
import Skills from "./components/Skills";

function App() {
  const [loadSkills, setLoadSkills] = useState(false);
  useEffect(() => {
    document.addEventListener("click", () => {
      window
        .$(".appContainer")[0]
        .scrollTo(0, window.$(".appContainer")[0].scrollHeight);
    });
  }, []);
  useEffect(() => {
    window
      .$(".appContainer")[0]
      .addEventListener("scroll", () => setLoadSkills(true));
  }, []);
  return (
    <div className="App">
      <div className="appContainer">
        <div className="home">
          <span className="bgname left">Shr</span>
          <NameCard />
          <span className="bgname right">ivas</span>
        </div>
        <Skills visible={loadSkills} />
      </div>
    </div>
  );
}

export default App;
