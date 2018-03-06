import React from 'react';
import Aux from '../../hoc/aux';
import ToolBar from '../navigation/toolbar/toolbar'
import SideDrawer from '../navigation/sidedrawer/sidedrawer'

const Layout = (props) => (
    <Aux>
        <ToolBar />
        <SideDrawer />
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default Layout;
