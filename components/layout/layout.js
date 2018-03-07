import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import ToolBar from '../navigation/toolbar/toolbar'
import SideDrawer from '../navigation/sidedrawer/sidedrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        });
    }

    render() {
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className="content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
