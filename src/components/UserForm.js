import React, { Component } from "react";
import FormOwnerDetails from "./FormOwnerDetails";
import FormRestaurantDetails from "./FormRestaurantDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhone: "",
    restaurantBio: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      phone,
      restaurantName,
      restaurantAddress,
      restaurantPhone,
      restaurantBio,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      phone,
      restaurantName,
      restaurantAddress,
      restaurantPhone,
      restaurantBio,
    };

    switch (step) {
      case 1:
        return (
          <FormOwnerDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormRestaurantDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        return (
          <FormOwnerDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default UserForm;
