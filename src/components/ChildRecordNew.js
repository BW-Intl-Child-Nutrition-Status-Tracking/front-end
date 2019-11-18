import React from "react";
import { withFormik, Form, Field } from "formik";

function ChildRecordNew() {
  return (
    <Form>
      <label htmlFor="childName">CHILD'S NAME</label>
      <Field type="text" name="childName" placeholder="Child Name" />
      <label htmlFor="parentsNames">PARENTS' NAMES</label>
      <Field type="text" name="parentsNames" placeholder="Parents Names" />
      <label htmlFor="homeAddress">HOME ADDRESS</label>
      <Field type="text" name="homeAddress" placeholder="Street Address" />
      <label htmlFor="communityName">COMMUNITY NAME</label>
      <Field type="text" name="communityName" placeholder="Community" />
      <label htmlFor="zipcode">ZIPCODE</label>
      <Field type="number" name="zipcode" placeholder="Zipcode" />
      <label htmlFor="phoneNumber">PHONE NUMBER</label>
      <Field
        type="number"
        name="phoneNumber"
        placeholder="+XX (XXX) XXX-XXXX"
      />
      <label htmlFor="country">COUNTRY</label>
      <Field type="text" name="country" placeholder="Country" />
      <label htmlFor="screenDate">DATE OF SCREENING</label>
      <Field type="date" name="screenDate" placeholder="mm/dd/yy" />
      <label htmlFor="screenCommunity">LOCATION OF SCREENING</label>
      <Field type="text" name="screenCommunity" placeholder="Community" />
      <Field type="text" name="screenCountry" placeholder="Country" />
      <label htmlFor="birthdate">DATE OF BIRTH</label>
      <Field type="date" name="birthdate" placeholder="mm/dd/yy" />
      <label htmlFor="gender">GENDER</label>
      <Field type="text" name="gender" placeholder="Gender" />
      <label htmlFor="height">HEIGHT</label>
      <Field type="number" name="height" placeholder="0" />
      <label htmlFor="weight">WEIGHT</label>
      <Field type="number" name="weight" placeholder="0" />
      <button>CREATE RECORD</button>
    </Form>
  );
}

const FormikChildRecordNew = withFormik({
  mapPropsToValues({
    childName,
    parentsNames,
    homeAddress,
    communityName,
    zipcode,
    phoneNumber,
    country,
    screenDate,
    screenCommunity,
    screenCountry,
    birthdate,
    gender,
    height,
    weight
  }) {
    return {
      childName: childName || "",
      parentsNames: parentsNames || "",
      homeAddress: homeAddress || "",
      communityName: communityName || "",
      zipcode: zipcode || "",
      phoneNumber: phoneNumber || "",
      country: country || "",
      screenDate: screenDate || "",
      screenCommunity: screenCommunity || "",
      screenCountry: screenCountry || "",
      birthdate: birthdate || "",
      gender: gender || "",
      height: height || "",
      weight: weight || ""
    };
  }
})(ChildRecordNew);

export default FormikChildRecordNew;
