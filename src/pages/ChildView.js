import React from "react";
import { connect } from "react-redux";

export default function Child(props) {
  console.log(props);
  return (
    <div>
      <h5>CHILD'S NAME: </h5>
      <p>{props.child.childName}</p>
      <h5>DATE OF BIRTH:</h5>
      <p>{props.child.birth}</p> <h5> GENDER :</h5>
      <p>{props.child.gender}</p> <h5>HEIGHT:</h5>
      <p>{props.child.height}</p> <h5>WEIGHT:</h5>
      <p>{props.child.weight}</p> <h5>COUNTRY OF SCREENING:</h5>
      <p>{props.child.countryScreening}</p>
      <h5> DATE OF SCREENING:</h5>
      <p>{props.child.dateOfScreening}</p>
      <h5>PARENTS' NAMES:</h5>
      <p>{props.child.parentName}</p>
      <h5>PHONE NUMBER :</h5>
      <p>{props.child.phoneNo}</p>
      <h5>Street Address :</h5>
      <p>{props.child.street}</p>
      <h5>LOCATION OF SCREENING :</h5>
      <p>{props.child.countryScreening}</p>
      <h5>COMMUNITY NAME :</h5>
      <p>{props.child.community}</p>
      <h5>ZIPCODE :</h5>
      <p></p>
    </div>
  );
}
