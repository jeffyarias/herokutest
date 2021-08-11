import React, { Component } from "react";
import classes from "./App.module.css";
import Modal from "./modal";
import axios from "axios";

//import PropTypes from 'prop-types';

class BookingModal2 extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    bedrooms: 0,
    bathrooms: 0,
    carpet: 0,
    discount: 0,
    price: 0,
    basePrice: 100,
    date: "",
    time: ""
  };

  formHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    if (!this.state.name || !this.state.address) {
      /* let x  = document.getElementById('mycheck');
  if(!x.checked) {
  alert('you should agree with the terms');

  }
  */
      document.getElementById("name").focus();
    } else {
      event.preventDefault();

      this.setState({
        name: "",
        email: "",
        phone: "",
        address: "",
        bedrooms: 0,
        bathrooms: 0,
        price: 0
      });
      document.getElementById("bedrooms").value = 0;
      document.getElementById("bathrooms").value = 0;

      const {
        name,
        email,
        phone,
        address,
        bedrooms,
        bathrooms,
        price
      } = this.state;

      const form = axios.post("/api/form", {
        name,
        email,
        phone,
        address,
        bedrooms,
        bathrooms,
        price
      });
    }
  };

  render() {
    if (this.state.bathrooms > 0 || this.state.bedrooms) {
      var total =
        (Number(this.state.bedrooms) + Number(this.state.bathrooms)) * 20 +
        this.state.basePrice;

      //const total = (Number(this.state.bedrooms) + Number(this.state.bathrooms)) * 20 + this.state.basePrice (this.state.bathrooms && this.state.bedrooms) ? 100 : 0;
      console.log(this.state.price);
    } else {
      total = 0;
    }
    const bedRommsHandler = event => {
      //var newPrice  =  (20 * this.state.bedrooms);

      this.setState({
        bedrooms: event.target.value,

        price: total
      });
    };

    const bathRoomshandler = event => {
      // var newPrice =  (20 * this.state.bathrooms);

      this.setState({
        bathrooms: event.target.value,

        price: total
      });
    };
    let both = [classes.formstyle10, classes.flexcontainer].join(" ");

    return (
      <div>
        <div className={classes.formstyle10}>
          <h1>
            Booking Information
            <span>Enter Information for the best cleaning of you life</span>
          </h1>
          <form onSubmit={this.submitHandler}>
            <div className={classes.section}>
              <span>1</span>First Name &amp; Address
            </div>
            <div className={classes.innerwrap}>
              <label>
                Your Full Name{" "}
                <input
                  id="name"
                  onChange={this.formHandler}
                  type="text"
                  name="name"
                  value={this.state.name}
                />
              </label>
              <label id="textarea">
                Address{" "}
                <textarea
                  onChange={this.formHandler}
                  name="address"
                  value={this.state.address}
                ></textarea>
              </label>
            </div>

            <div className={classes.section}>
              <span>2</span>Email &amp; Phone
            </div>
            <div className={classes.innerwrap}>
              <label>
                Email Address{" "}
                <input
                  onChange={this.formHandler}
                  type="email"
                  name="email"
                  value={this.state.email}
                />
              </label>
              <label>
                Phone Number{" "}
                <input
                  onChange={this.formHandler}
                  type="text"
                  name="phone"
                  value={this.state.phone}
                />
              </label>
            </div>

            <div className={classes.section}>
              <span>3</span>Passwords
            </div>
            <div className={classes.innerwrap}>
              <label>
                Password <input type="password" name="field5" />
              </label>
              <label>
                Confirm Password <input type="password" name="field6" />
              </label>
              <input
                id="bedrooms"
                onChange={this.formHandler}
                onClick={bedRommsHandler}
                type="number"
                name="bedRooms"
                min="0"
                max="8"
                autoComplete="false"
              />
              <input
                id="bathrooms"
                onChange={this.formHandler}
                onClick={bathRoomshandler}
                type="number"
                name="bathRooms"
                min="0"
                max="8"
                autoComplete="false"
                defaultValue="0"
              />
            </div>

            <div className={classes.button}>
              <input type="submit" name="submit" />
              <span className={classes.privacypolicy}>
                <input id="mycheck" type="checkbox" name="checkbox" />
                You agree to our Terms and Policy.
              </span>
            </div>
          </form>

          <Modal
            price={this.state.price}
            bedrooms={this.state.bedrooms}
            bathrooms={this.state.bathrooms}
            totalPrice={total}
          />
        </div>
      </div>
    );
  }
}
export default BookingModal2;
