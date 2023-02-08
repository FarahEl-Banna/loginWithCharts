import React from "react";
import { Navbar, SideNav, SideNavNav, SideNavLink } from "mdbreact";

const DoubleNav = () => {
  return (
    <div>
      <Navbar className="navbar-expand-lg navbar-light">
        {/* Navbar content */}
      </Navbar>
      <SideNav
        breakId="side-nav-breakpoint"
        className="d-flex flex-column"
        logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
        triggerOpening={<i className="fas fa-bars"></i>}
      >
        <SideNavNav>
          <SideNavLink>Home</SideNavLink>
          <SideNavLink>About</SideNavLink>
        </SideNavNav>
      </SideNav>
    </div>
  );
};

export default DoubleNav;