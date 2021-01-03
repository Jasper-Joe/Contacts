import React from "react";
import Contacts from "../contacts.js";
import Card from "./Card";
var con = Contacts;
console.log(con.name);
function App() {
  return (
    <div>
      <Card
        name={con[0].name}
        phone={con[0].phone}
        img={con[0].imgURL}
        email={con[0].email}
      />

      <Card
        name={con[1].name}
        phone={con[1].phone}
        img={con[1].imgURL}
        email={con[1].email}
      />

      <Card
        name={con[2].name}
        phone={con[2].phone}
        img={con[2].imgURL}
        email={con[2].email}
      />
    </div>
  );
}

export default App;
