import React, { Component } from 'react';
import Layout from './components/layout/layout';
import Aux from './hoc/aux';
import BurgerBuilder from './containers/burgerBuilder/burgerbuilder';

class App extends Component {
    render() {
        return (
            <Aux>
                <Layout>
                    <BurgerBuilder />
                </Layout>
            </Aux>
        );
    }
}

export default App;
