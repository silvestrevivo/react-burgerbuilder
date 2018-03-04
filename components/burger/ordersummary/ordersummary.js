import React from 'react';
import Aux from '../../../hoc/aux';

const OrderSummary = (props) => {
  const ingredientsSumary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    )
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSumary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  )
};

export default OrderSummary;
