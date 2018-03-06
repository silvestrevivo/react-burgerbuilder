import React from 'react';
import NavigationItem from './navigationitem';

const NavigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
