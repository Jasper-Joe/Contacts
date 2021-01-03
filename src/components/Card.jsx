import React from "react";
import { createAdd } from "typescript";
import Avatar from "./Avatar";
import Paragraph from "./Paragraph";
function Card(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Paragraph text={props.phone} />
          <Paragraph text={props.email} />
          <p>{props.id}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
