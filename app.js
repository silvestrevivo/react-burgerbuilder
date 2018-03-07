import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/layout';
import Aux from './hoc/aux';
import BurgerBuilder from './containers/burgerBuilder/burgerbuilder';
import Checkout from './containers/checkout/checkout'

class App extends Component {
    render() {
        return (
            <Aux>
                <Layout>
                    <Switch>
                        <Route path="/" component={BurgerBuilder} exact />
                        <Route path="/checkout" component={Checkout} />
                    </Switch>
                </Layout>
            </Aux>
        );
    }
}

export default App;
