import React from 'react';
import Logo from '../../logo/logo'
import NavigationItems from '../navigationitems/navigationitems'

const SideDrawer = () => {
  return (
    <div className="SideDrawer">
      <div style={{ height: '20%' }}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default SideDrawer;
