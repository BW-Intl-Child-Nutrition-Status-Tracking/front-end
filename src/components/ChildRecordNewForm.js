import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addNewChild } from "../actions";

const ChildRecordNewForm = props => {
  console.log(props);
  const [values, setValues] = useState({
    childName: "",
    gender: "",
    birth: "",
    weight: "",
    height: "",
    countryScreening: "",
    dateOfScreening: "",
    community: "",
    parentName: "",
    phoneNo: "",
    country: "",
    state: "",
    city: "",
    street: ""
  });

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  console.log(values);
  const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    headline: {
      margin: "2%",
      paddingTop: "2%"
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "90%",
      padding: "5%"
    },
    input: {
      padding: "2%",
      margin: "2%"
    },
    button: {
      margin: "2%",
      width: "30%"
    }
  });
  const onSubmitchild = event => {
    event.preventDefault();
    console.log("dsfs");
    props.addNewChild(
      props.match.params.country,
      props.match.community,
      values
    );
  };

  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <h1 className={classes.headline}>New Child Record</h1>
      <form className={`${classes.form} addchild`} onSubmit={onSubmitchild}>
        <div>
          <label htmlFor="childName">CHILD'S NAME</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="childName"
            placeholder="Child Name"
          />
          <label htmlFor="parentsNames">PARENTS' NAMES</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="parentName"
            placeholder="Parents Names"
          />
        </div>
        <div>
          <label htmlFor="homeAddress">HOME ADDRESS</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="street"
            placeholder="Street Address"
          />
          <label htmlFor="communityName">COMMUNITY NAME</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="communityName"
            placeholder="Community"
          />
        </div>
        <div>
          <label htmlFor="zipcode">ZIPCODE</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="zipcode"
            placeholder="Zipcode"
          />
          <label htmlFor="phoneNumber">PHONE NUMBER</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="phoneNo"
            placeholder="+XX (XXX) XXX-XXXX"
          />
        </div>
        <div>
          <label htmlFor="country">COUNTRY</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="country"
            placeholder="Country"
          />

          <label htmlFor="screenDate">DATE OF SCREENING</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="date"
            name="dateOfScreening"
            placeholder="mm/dd/yy"
          />
        </div>
        <div>
          <label htmlFor="screenCommunity">LOCATION OF SCREENING</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="countryScreening"
            placeholder="Community"
          />
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="screenCountry"
            placeholder="Country"
          />
        </div>
        <div>
          <label htmlFor="birthdate">DATE OF BIRTH</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="date"
            name="birth"
            placeholder="mm/dd/yy"
          />
          <label htmlFor="gender">GENDER</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="gender"
            placeholder="Gender"
          />
        </div>
        <div>
          <label htmlFor="height">HEIGHT</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="height"
            placeholder="0"
          />
          <label htmlFor="weight">WEIGHT</label>
          <input
            onChange={onChange}
            className={classes.input}
            type="text"
            name="weight"
            placeholder="0"
          />
        </div>
        <div className="btndiv">
          <button className={classes.button} variant="contained">
            CREATE RECORD
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(state => state, { addNewChild })(ChildRecordNewForm);
