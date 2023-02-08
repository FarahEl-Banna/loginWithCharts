import React, { useState, useEffect } from "react";
import * as users from "../usersdb";
import {MDBInput,MDBCardTitle,
    MDBCardHeader,MDBBtn} from 'mdb-react-ui-kit';
import { useHistory } from "react-router-dom";


export default function LoginForm({changeState}) {
    const history = useHistory();
  const [firstRun, setfirstRun] = useState(true);
  const [loginform, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    Eemail: "",
    Epassword: "",
  });
  const [loginStatus, setLoginStaus] = useState("");

  function handleChange(e) {
    setLoginForm((prevform) => {
      return { ...prevform, [e.target.name]: e.target.value };
    });
  }

  useEffect(() => {
    if (firstRun) setfirstRun(false);
    else if (!firstRun)
      setErrors((preverrors) => {
        return {
          ...preverrors,
          Eemail: users.email_validator(loginform.email),
          Epassword: users.password_validator(loginform.password),
        };
      });
      setLoginStaus("")
  }, [loginform])

  function loginbtn(e){
    e.preventDefault()
    let stringErro = ""
    let props = Object.getOwnPropertyNames(errors)
    props.forEach((el) => {
      stringErro = stringErro + errors[el];
    });
    console.log(stringErro,'stringerro')
    if (stringErro) { 
      setLoginStaus(stringErro)
      return stringErro;}
    else {
      // validation passed
      const {msg} = checkLoginInfo();
      setLoginStaus(msg);
    }
  }
  function checkLoginInfo() {
    //admin login 
    //console.log(loginform.email === "admin@admin.com" && loginform.password ==="Admin.1234")
    if(loginform.email === "admin@admin.com" && loginform.password ==="Admin.1234"){
        changeState()
        localStorage.setItem("username", "Admin");
        history.push("/dashbord");}
    else for (let i = 0; i < users.users.length; i++) {
      if (users.users[i].email === loginform.email) {
        if (users.users[i].password === loginform.password) {
          //navigate to landing page
          changeState()
          // localStorage.setItem("username", JSON.stringify(users.users[i].username));
          history.push({pathname:"/landingpage",state:{logedinUser: users.users[i]}});
          return { status: 202, msg: "Login Successfull" }; //202 accepted
        } else {
          return { status: 203, msg: "password incorrect" }; //203 Non-Authoritative Information
        }
      }
    }
    return { status: 204, msg: "User not found" }; //204  no conten
  }

  return (
    <form>
         <MDBCardHeader><MDBCardTitle>Login</MDBCardTitle></MDBCardHeader>
    {/* <MDBValidationItem className='col-12 my-3 input-div' feedback={errors.Eemail?'Please provide a valid email.':""} invalid> */}
        <div className="col-12 my-3 input-div">
        <MDBInput className={`forminput ${errors.Eemail?"outline-invalid":"outline-valid"}`}
          value={loginform.email}
          name='email'
          onChange={handleChange}
          id='emailValidation'
          placeholder='Email or phone number here'
          label="Email"
        />
        </div>
        {errors.Eemail &&<label className="validation_labels" htmlFor="email">
        {errors.Eemail}
      </label>}
      {/* </MDBValidationItem> */}
      {/* <MDBValidationItem className='col-12 input-div' feedback={errors.Epassword?'Please provide a valid Password,':""} invalid> */}
      <div className="col-12 my-3 input-div ">
        <MDBInput  className={`forminput ${errors.Epassword?"outline-invalid":"outline-valid"}`}
          value={loginform.password}
          type='password'
          name='password'
          onChange={handleChange}
          id='passwordValidation'
          label="Password"
          placeholder='Password'
          
        />
        </div>
       {errors.Epassword && <label className="validation_labels" htmlFor="password">
        {errors.Epassword}
      </label>}
        {/* </MDBValidationItem> */}
        <div className='col-12 my-3 validation_labels'>{loginStatus}</div>
        <div className='col-12'>
        <MDBBtn type='submit' noRipple rounded size="sm" onClick={loginbtn}>login</MDBBtn>
        </div>
        </form>
  );
}
