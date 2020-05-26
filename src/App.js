import React from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header name="Contact Manager" />
      <div className="container">
        <Contact name="Krishna" email="krsna@ya.com" phone="999-888-777" />
        <Contact name="Arjun" email="krsna@ya.com" phone="999-888-777" />
        <Contact name="Dilip" email="krsna@ya.com" phone="999-888-777" />
      </div>
    </div>
  );
}

export default App;
