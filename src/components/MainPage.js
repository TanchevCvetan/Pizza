import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
class MainPage extends React.Component {
  render() {
    return (
      
        <div className="ui menu container">
          <div className="header item">Mario's Pizza</div>
          <a className="item" href="/">Home</a>
          <a onClick = {this.props.onClick} className="item" href="/menu">Menu</a>
          <a className="item" href="/contact-us">Contact us</a>

          <Link to="/cart" className="ui button primary right floated item">
            <i className="shopping cart icon"></i>
            {this.props.cartItems.length === 0 ? (
          "Cart is empty"
        ) : (
          <div>Cart Items : {this.props.cartItems.length}</div>
        )}
        </Link>
        </div>
      
    );
  }
}

const mapStateToProps = state =>{
  return {
    cartItems : state.cart.items
  }
}

export default connect(
  mapStateToProps,
)(MainPage);
