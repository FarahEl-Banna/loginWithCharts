import React, { useState }  from "react";
import {MDBCard,MDBCardBody, MDBIcon,MDBBtn,MDBCardFooter} from 'mdb-react-ui-kit';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Main({changeState}){
  const [loginIsActive, setLoginIsActive] = useState(true)
  
  function toggeleForm(){
    setLoginIsActive(prev=>!prev)}


    return (
      <div className="containor">
      <div className='bg-image'>
        <img src='https://mdbootstrap.com/img/new/standard/city/018.webp' className='w-100 img-bg' alt="" loading="lazy"/>
      </div>
      <MDBCard alignment='center' className="cards">
        <MDBCardBody>
       {loginIsActive? <LoginForm changeState={changeState}/>:<SignupForm toggeleForm={toggeleForm}/>} 
        <p>{loginIsActive?"Don't have an account?":"welcom to the club !!"}
          <MDBBtn onClick={toggeleForm} noRipple outline rounded size="sm" color="secondary">{loginIsActive?"Sign Up":"Login"}</MDBBtn></p>
        </MDBCardBody>
      <MDBCardFooter className='text-muted'>
      <MDBBtn tag='a' color='none' className='m-1' noRipple style={{ color: '#3b5998' }}>
        <MDBIcon fab icon='facebook-f' size='lg' />
      </MDBBtn>
      <MDBBtn tag='a' color='none' className='m-1' noRipple style={{ color: '#ac2bac' }}>
        <MDBIcon fab icon='instagram' size='lg' />
      </MDBBtn>
      <MDBBtn tag='a' color='none' className='m-1' noRipple style={{ color: '#1d1e22' }}>
        <MDBIcon fab icon='codepen' size='lg' />
      </MDBBtn>
      <MDBBtn tag='a' color='none' className='m-1' noRipple style={{ color: '#55acee' }}>
        <MDBIcon fab icon='twitter' size='lg' />
      </MDBBtn>
      </MDBCardFooter>
    </MDBCard>
    </div>
    )
}

/// validation done need to be displayed