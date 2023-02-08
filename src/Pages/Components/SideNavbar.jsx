import React, { useState } from 'react';
import './NavStylesheet.css';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBIcon,MDBNavbarNav,
  MDBNavbarItem,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem,
  MDBCollapse,MDBListGroup, MDBListGroupItem} from 'mdb-react-ui-kit';
  //import { useHistory } from "react-router-dom";


export default function SideNavbar({user,setshownTab}) {
  const [showShow, setShowShow] = useState(false);
//   const history = useHistory();
  const toggleShow = () => setShowShow(!showShow);

//   const logout =()=>{
//     history.push("/");
//   }

  return (
    <>
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="NavStylesheet"
    	/>
      <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
        <div className="position-sticky">
          <MDBListGroup flush='true' className="mx-3 mt-4">

              <MDBListGroupItem tag='a' href='#' id="dashboardbtn" action onClick={setshownTab()}
              className='border-0 border-bottom rounded my-2' >
                <MDBIcon fas icon="tachometer-alt me-3" />
                Main Dashboard
              </MDBListGroupItem>
            
              <MDBListGroupItem tag='a' href='#' id="userbtn" onClick={setshownTab()} action className='border-0 border-bottom rounded '>
              <MDBIcon fas icon="users" />
                Users
              </MDBListGroupItem>
        

            </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand='lg' light bgColor='light' >
        <MDBContainer fluid className="position-sticky">
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type='button'
              aria-label='Toggle navigation'
              onClick={toggleShow}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href='#' className='brand'>
              MountyHolding
            </MDBNavbarBrand>

            {/* <MDBCollapse navbar>
              <MDBNavbarItem className="d-flex align-items-center">
                <MDBInput placeholder='Search' id='form1' type='text' />
                <MDBIcon fas icon="search mx-2" />
              </MDBNavbarItem>
            </MDBCollapse> */}


          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">

            {/* <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color='danger' notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <label>Dropdown Menu 1</label>
                    {/* <MDBDropdownLink href="#">Some news</MDBDropdownLink> }
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}

            {/* <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fab icon='github' />
              </MDBNavbarLink>
            </MDBNavbarItem> */}

            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  {user?user.username : "Error in log in" }
                  {/* <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22" alt="" loading="lazy" /> */}
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                  <MDBListGroupItem tag='a' href='/' action className='border-0 border-bottom rounded '>
                  <MDBIcon fas icon="sign-out-alt" />LOgout
                    </MDBListGroupItem>
                  {/* <MDBBtn noRipple rounded size="sm" className='logout-btn' color='none' onClick={logout}>logOut</MDBBtn> */}
                    {/* <MDBDropdownLink href="#">Logout</MDBDropdownLink> */}
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

/**
 * <img
                src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                height='30'
                alt=''
                loading='lazy'
              />
 */