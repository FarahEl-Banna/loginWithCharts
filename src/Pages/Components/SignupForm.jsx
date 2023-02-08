import React,{useState, useEffect} from 'react';
import * as users from '../usersdb'
import {MDBInput,MDBCardTitle,
    MDBCardHeader,MDBBtn} from 'mdb-react-ui-kit';
 import DialogAfterSignup from './DialogAfterSignup';


export default function SignupForm({toggeleForm}) {
    const [firstRun, setfirstRun]= useState(true);
    const [signupform, setSignupForm] = useState({
        fname:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [errors,setErrors] = useState({
        Ename:"",
        Eemail:"",
        Epassword:"",
        EconfirmPassword:"",
    })
    const[newUserStatus,setNewUserStatus]= useState("")
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    function handleChange(e){
        setSignupForm(prevform =>{
                return {...prevform, [e.target.name]:e.target.value}
            }) 
        }

    useEffect(()=>{
         if(firstRun) setfirstRun(false)
         if(!firstRun)
        setErrors({
            Ename: users.name_validator(signupform.fname),
            Eemail:users.email_validator(signupform.email),
            Epassword:users.password_validator(signupform.password),
            EconfirmPassword: users.confirmPassword_validator(signupform.password,signupform.confirmPassword)
            })
            //console.log(signupform)
    },[signupform])

    function signupbtn(e){
      e.preventDefault()
        //console.log("signupbt is clicked")
        let stringErro =''
        let props = Object.getOwnPropertyNames(errors)
        props.forEach(el => {stringErro = stringErro + errors[el]});
        console.log(stringErro, "string error")
        if(stringErro)return stringErro //errors fund 
        else{// validation passed
            setNewUserStatus(saveUsersInfo())
        }
    }
    function saveUsersInfo(){
        const newUser={
            username:signupform.fname,
            email:signupform.email,
            password:signupform.password
        }
        var res =  users.addUser(newUser)
        if(res.status===201){
        setSignupForm({
            fname:"",
            email:"",
            password:"",
            confirmPassword:""
        })
        setErrors({
          Ename: "",
          Eemail:"",
          Epassword:"",
          EconfirmPassword: ""
          })
      }
       setDialogIsOpen(true)
        return res
    }
  const handleToClose = (e) => {
    e.preventDefault()
    setNewUserStatus("")
    setDialogIsOpen(false);
  };
  const handleLoginClicked =(e)=>{
    e.preventDefault()
    setDialogIsOpen(false);
    setNewUserStatus("")
    toggeleForm();
  }
  
    return(
        <form>
         <MDBCardHeader><MDBCardTitle>SignUp</MDBCardTitle></MDBCardHeader>
         <div className='col-12 my-3 input-div'>
        <MDBInput  className={`forminput ${errors.Ename?"outline-invalid":"outline-valid"}`}
          value={signupform.fname}
          name='fname'
          onChange={handleChange}
          id='nameValidation'
          label="Username"
          placeholder='First Name' 
        />
        {/* {errors.Ename?<label className="validation_labels" htmlFor="fname">
        {errors.Ename}
      </label>:<br/>} */}
        </div>
        <div className='col-12 mb-3 input-div'>
        <MDBInput  className={`forminput ${errors.Eemail?"outline-invalid":"outline-valid"}`}
          value={signupform.email}
          name='email'
          onChange={handleChange}
          id='emailValidation'
          label="Email"
          placeholder='Email'
        />
        {/* {errors.Eemail?<label className="validation_labels" htmlFor="email">
        {errors.Eemail}
      </label>:<br/>} */}
        </div>
      <div className='col-12 mb-3 input-div'>
        <MDBInput  className={`forminput ${errors.Epassword?"outline-invalid":"outline-valid"}`}
          value={signupform.password}
          type='password'
          name='password'
          onChange={handleChange}
          id='passwordValidation'
          label="Password"
          placeholder='Password'
        />
        {/* {errors.Epassword? <label className="validation_labels" htmlFor="email">
        {errors.Epassword}
      </label>:<br/>} */}
        </div>
        <div className='col-12 mb-3 input-div'>
        <MDBInput className={`forminput ${errors.EconfirmPassword?"outline-invalid":"outline-valid"}`}
          value={signupform.confirmPassword}
          type='password'
          name='confirmPassword'
          onChange={handleChange}
          id='confirmPasswordValidation'
          label="Confirm Password"
          placeholder='Confirm Password'
        />
        {/* {errors.EconfirmPassword?<label className="validation_labels" htmlFor="email">
        {errors.EconfirmPassword}
      </label>:<br/>} */}
        </div>
        {/* </MDBValidationItem> */}
        <div className='col-12'>
        <MDBBtn type='submit' noRipple rounded size="sm" onClick={signupbtn}>SignUp</MDBBtn>
        </div>
        {<DialogAfterSignup open={dialogIsOpen} handleToClose={handleToClose} userStatus={newUserStatus} LoginClicked={handleLoginClicked}/>}
        </form>
    )
}