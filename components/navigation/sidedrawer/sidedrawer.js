import React from 'react';
import Logo from '../../logo/logo'
import NavigationItems from '../navigationitems/navigationitems'
import BackDrop from '../../UI/Backdrop/backdrop'
import Aux from '../../../hoc/aux'

const SideDrawer = (props) => {

  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }

  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div style={{ height: '11%' }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer;
