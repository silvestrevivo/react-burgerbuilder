import React from 'react';
import Aux from '../../hoc/aux';

const Layout = (props) => (
    <Aux>
        <div className="navigation">Toolbar, SideDrawer, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default Layout;
