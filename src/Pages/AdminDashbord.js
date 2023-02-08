import React,{Component} from "react";
import SideNavbar from "./Components/SideNavbar";
import Footer from "./Components/Footer";
import EditableTable from "./Components/EditableTable";
import DraggableGrid from "./Components/DraggableGrid";
import DraggableHorizontal from "./Components/DraggableHorizontal";



export default class AdminDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            dashboardIsShown: false,
            logedinUser:{username:"Admin"}
        };
        this.changeState = this.changeState.bind(this);
      };
     changeState(e){
        console.log(e.target.id ==="dashboardbtn"
        ,"tugeling satae")
        this.setState({dashboardIsShown:e.target.id ==="dashboardbtn"})
      }
    render(){
    return(
        <React.Fragment>
            <SideNavbar user={this.state.logedinUser}  setshownTab={()=>this.changeState}/> 
            <div className="custom-container">
                 {this.state.dashboardIsShown?
                 <>
                 <DraggableHorizontal id="dashboard"/>
                 <DraggableGrid/>
                 </>:
                 <EditableTable/>}
            </div>
            <Footer/>
        </React.Fragment>

    )}
}

