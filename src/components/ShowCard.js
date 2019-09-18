import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import cardStyle from "./styles/cardStyle.css";

class ShowCard extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const productItems = this.props.products.map(product => {
      return (
        <div key={product.id} className="card">
          <div className="image">
            <img alt="Pizza" src={product.image} />
          </div>
          <div className="content">
            <a href={`#${product.id}`} className="header">{product.name}</a>
            <div className="description">{product.description}</div>
          </div>
          <div className="content">
            <h3>{`$${product.price}`}</h3>
          </div>
          <button 
            onClick = {()=>this.props.addToCart(this.props.cartItems,product)}
            className="ui button primary">
            Add to Cart
          </button>
        </div>
      );
    });

    return <div className="container">{productItems}</div>;
  }
}

const mapStateToProps = state =>{
  return {
    products : state.products.filteredItems,
    cartItems : state.cart.items
  }
}
export default connect(
  mapStateToProps,
  { fetchProducts, addToCart }
)(ShowCard);
