import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationitems/navigationitems';
import SideDrawer from '../sidedrawer/sidedrawer';

const ToolBar = (props) => (
  <header className="ToolBar">
    <SideDrawer />
    <div style={{ height: '80%' }}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default ToolBar;
