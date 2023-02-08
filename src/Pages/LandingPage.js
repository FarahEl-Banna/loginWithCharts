import React, { useState,useEffect } from "react";
import DraggableGrid from "./Components/DraggableGrid";
import DraggableHorizontal from "./Components/DraggableHorizontal";
import DialogAfterSignup from "./Components/DialogAfterSignup";
import { useHistory } from "react-router-dom";
import SideNavbar from "./Components/SideNavbar";


export default function LandingPage(props){
    const history = useHistory();
    const [logedinUser,setlogedinUser] = useState(undefined)
    const [dashboardIsShown, setDashboardIsShown] = useState(true)
     useEffect(()=>{
        if(props.location.state)
        setlogedinUser(
            props.location.state.logedinUser
        )
     },[])

        function toggleDashboard(e){
            console.log(e.target.id ==="dashboardbtn"
                ,"tugeling satae")
                setDashboardIsShown(()=>{
                     return e.target.id ==="dashboardbtn"})
         }
     
     function handleLoginClicked(){
        history.push("/")
     }
    return(
        <>
        <SideNavbar user={logedinUser}  setshownTab={()=>toggleDashboard}/> 
         {/* <DialogAfterSignup open={logedinUser===undefined} userStatus={"TimedOut please login to continue "} LoginClicked={handleLoginClicked}/>  */}
        <div className="custom-container">
           { dashboardIsShown?
           <>
            <DraggableHorizontal id="dashboard"/>
            <DraggableGrid/>
            </>
        :<>User Table!!</>
        }
        </div>
        </>
    )
}