import React from "react";
import { Routes,Route } from "react-router";
import Home from './Home';
import NotePage from "./NotePage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<NotePage />} />
      </Routes>
  ); 
}
export default App;
