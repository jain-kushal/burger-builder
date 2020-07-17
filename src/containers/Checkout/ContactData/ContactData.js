import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: String,
      email: String,
      address: {
        street: String,
        postalCode: String,
      },
      loading: false,
    };
  }

  orderHandler = (e) => {
    e.preventDefault();
    // alert('You clicked continue!!');
    this.setState({
      ...this.state,
      loading: true,
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Kushal Jain',
        address: {
          street: 'Test street',
          zipCode: '12345',
          country: 'United States',
        },
        email: 'test@gmail.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((res) => {
        this.setState({
          ...this.state,
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          loading: false,
        });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Type your name"
        />
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Type your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Type your street address"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Type your postal code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
