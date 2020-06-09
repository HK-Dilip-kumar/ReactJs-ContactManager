import React from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/contacts/AddContact";

import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header name="Contact Manager" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
