import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
class MainPage extends React.Component {
  render() {
    return (
      
        <div className="nav">
          <div className="logo">Mario's Pizza</div>
          <a className="menu-button" href="/">Home</a>
          <a onClick = {this.props.onClick} className="menu-button" href="/menu">Menu</a>
          <a className="menu-button" href="/contact-us">Contact us</a>

          <Link to="/cart" className="ui button primary right floated item">
            <i className="shopping cart icon"></i>
            {this.props.cartItems.length === 0 ? (
          "Cart"
        ) : (
          <div>Cart: {this.props.cartItems.length}</div>
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
