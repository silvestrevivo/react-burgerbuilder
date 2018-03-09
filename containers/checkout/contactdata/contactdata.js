import React, { Component } from 'react';
import Button from '../../../components//UI/Button/button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }
  render() {
    return (
      <div className="ContactData">
        <h4>Enter your contact data</h4>
        <form action="" className="ContactForm">
          <input type="text" name="name" placeholder="your name" />
          <input type="email" name="email" placeholder="your email" />
          <input type="text" name="street" placeholder="your street" />
          <input type="text" name="postal" placeholder="your postal code" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
