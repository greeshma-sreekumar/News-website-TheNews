import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./app.css";

function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default App;