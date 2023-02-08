import React, { Component } from 'react';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SideNavbar from './Components/SideNavbar';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogedin: false };
    this.changeState = this.changeState.bind(this);
  }
  changeState(){
    // console.log("toggle state is called")
    this.setState({isLogedin:true})
  }

  render() {
    console.log(this.state.isLogedin)
    return (
      <React.Fragment>
        {this.state.isLogedin &&<SideNavbar/>}
        <Main changeState={this.changeState}/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default HomePage;
/**
 * states moving through navbar
 * dragble items and charts   done
 * Styling  
 * dark/light mode toggle
 */