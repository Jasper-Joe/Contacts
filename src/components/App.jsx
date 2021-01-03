import React from "react";
import Contacts from "../contacts.js";
import Card from "./Card";
import Avatar from "./Avatar";

function helper(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      email={contact.email}
      phone={contact.phone}
      img={contact.imgURL}
    />
  );
}

function App() {
  return Contacts.map(helper);
}

export default App;
