import React from "react";
import { connect } from "react-redux";

export default function Child(props) {
  console.log(props);
  return (
    <div>
      <h5>Children Name:</h5>
      <p>{props.child.childName}</p>
      <h5>age:</h5>
      <p>{props.child.birth}</p> <h5>Gender:</h5>
      <p>{props.child.childName}</p> <h5>Children Name:</h5>
      <p>{props.child.childName}</p> <h5>Children Name:</h5>
      <p>{props.child.childName}</p> <h5>Children Name:</h5>
      <p>{props.child.childName}</p> <h5>Children Name:</h5>
      <p>{props.child.childName}</p>
    </div>
  );
}
