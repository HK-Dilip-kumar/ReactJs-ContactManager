import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "krishna",
          email: "krs@gmail.com",
          phone: "999-888",
        },
        {
          id: 2,
          name: "Arjun",
          email: "Ajn@gmai.com",
          phone: "368-666-777",
        },
        {
          id: 3,
          name: "Dilip",
          email: "Dil@gmai.com",
          phone: "765-343-777",
        },
      ],
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact id={contact.id} contact={contact} />
        ))}
      </div>
      // <div>
      //   {contacts.map((contact) => (
      //     <h1>{contact.name}</h1>
      //   ))}
      // </div>
    );
  }
}

export default Contacts;
