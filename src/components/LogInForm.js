// import React, { useState, useEffect, useRef } from "react";
// import { connect } from "react-redux";
// import { logInaction, userInfo } from "../actions";
// import { Link } from "react-router-dom";

// function LogInForm(props) {
//   console.log(props);
//   const [values, setValues] = useState({
//     username: "",
//     password: ""
//   });
//   useEffect(() => {
//     if (sessionStorage.getItem("token")) {
//       props.userInfo(props.username);
//       props.history.push(`/${props.username}`);
//     }
//   }, [sessionStorage.getItem("token")]);

//   const onchange = event => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value
//     });
//   };

//   const onLogin = event => {
//     event.preventDefault();
//     props.logInaction(values, props.history);
//   };

//   return (
//     <div>
//       <h3>Login Please</h3>
//       {props.error ? <p>{props.error}</p> : null}
//       <form onSubmit={onLogin}>
//         <label htmlFor="username">UserName: </label>
//         <input
//           id="username"
//           name="username"
//           placeholder="username"
//           onChange={onchange}
//           value={values.username}
//         />
//         <label htmlFor="password">Password: </label>
//         <input
//           id="password"
//           name="password"
//           placeholder="password"
//           onChange={onchange}
//           value={values.password}
//         />
//         <button>LogIn</button>
//         <p>
//           forgot your password? <Link to="">reset Password</Link>
//         </p>
//       </form>
//     </div>
//   );
// }
// const mapStatetoProps = state => {
//   return {
//     username: state.user
//   };
// };
// export default connect(mapStatetoProps, { logInaction, userInfo })(LogInForm);
