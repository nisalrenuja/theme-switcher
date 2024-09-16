import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const theme = useLocalStorage();
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className={`app ${currentTheme}`}>
      <h1>{currentTheme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
