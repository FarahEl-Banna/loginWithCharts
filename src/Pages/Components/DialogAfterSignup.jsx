import React from "react";

import { MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter,} from "mdb-react-ui-kit";


export default function DialogAfterSignup({open,handleToClose,userStatus,LoginClicked}){

  const{status} = userStatus
  //201ok 302 exists 406 error 
  const title = status?(status === 201?"SignUp Successful":"Email already exists"):userStatus
    return(
        <MDBModal show={open}  tabIndex="-1">
        <MDBModalDialog color="secondary">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>{title}</MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>Go to LogIn?</MDBModalBody>
              <MDBModalFooter>
                {/* <MDBBtn color="secondary" outline onClick={handleToClose} noRipple rounded size="sm">
                  Close
                </MDBBtn> */}
                <MDBBtn noRipple onClick={LoginClicked} rounded size="sm">Login</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
    )
}
