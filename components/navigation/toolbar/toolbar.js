import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationitems/navigationitems';
import DrawerToggle from '../sidedrawer/drawertoggle/drawertoggle';

const ToolBar = (props) => (
  <header className="ToolBar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div style={{ height: '80%' }}>
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header >
);

export default ToolBar;
