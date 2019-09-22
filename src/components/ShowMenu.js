import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Filter from "./Filter";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";


class ShowMenu extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    if(localStorage.getItem('cartItems')){
      this.setState({cartItems: JSON.parse(localStorage.getItem("cartItems"))})
    }
  }
  
  render() {
    return (
      <div className="">
        <Filter />
        <hr />
        <ShowCard />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    products : state.products.filteredItems
  }
}

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ShowMenu);
