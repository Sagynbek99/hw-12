import "./App.css";
import { useState } from "react";
import SwitchButton from "./components/SwitchButton";
import Header from "./components/Header";
function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <SwitchButton.Provider value={{ isActive, setIsActive }}>
        <Header />
      </SwitchButton.Provider>
    </div>
  );
}

export default App;
