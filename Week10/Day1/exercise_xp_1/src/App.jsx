import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import Example from "./components/Example";
import CharacterCounter from "./components/InputCounter";
import TodoList from "./components/TodoList";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        <Example/>
      </div>
      <CharacterCounter/>
      <TodoList/>
    </ThemeProvider>
  );
}

export default App;