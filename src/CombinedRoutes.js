import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import AdminDashboard from "./Pages/AdminDashbord";
import SideNavbar from "./Pages/Components/SideNavbar";

class CombinedRoutes extends Component {
    constructor() {
        super();
        this.state = { 
            dashboardIsShown: false,
            logedinUser:{username:"Admin"}
        };
        this.changeState = this.changeState.bind(this);
      };
  changeState(e){
    console.log(e.target.id ==="dashboardbtn","tugeling satae")
    this.setState({dashboardIsShown:e.target.id ==="dashboardbtn"})
  }
    render() {
        // const data = localStorage.getItem("username");
        // console.log(data,"data in local storege")
        return (
            <>
            {/* {window.location.pathname != "/" && <SideNavbar user={this.state.logedinUser}  setshownTab={()=>this.changeState}/>} */}
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={`/`} exact component={HomePage} key={`/`} />
                    <Route path={`/landingpage`} exact component={LandingPage} key={`/landingpage`} />
                    <Route path={`/dashbord`} exact component={AdminDashboard} key={`/dashbord`} />
                </Switch>
            </Suspense>
            </>
        )
    }
}

export default CombinedRoutes;