import React from "react";
import "./index.css";
import Header from "./Header";
import Tindercards from "./Tindercards";
import SwipeButtons from "./SwipeButtons";
export default function App() {
  return (
    <div className="app">
      <Header />
      <Tindercards />
      <SwipeButtons />
    </div>
  );
}
