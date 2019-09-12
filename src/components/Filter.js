import React, { Component } from "react";
import { connect } from 'react-redux';
import { sortProducts } from "../actions/productActions";

class Filter extends Component {
  render() {
    return (
      <div className="ui grid container">
        <div className="eight wide column">
          <h5>{this.props.filteredProducts.length}:Products Found.</h5>
        </div>
        <div className="eight wide column">
          <label>
           Order by
            <select
                className="ui dropdown"
                value={this.props.sort}
                onChange={(e) => this.props.sortProducts(this.props.filteredProducts,e.target.value)}
            >
              <option value="">Select</option>
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    products: state.products.items,
    filteredProducts:state.products.filteredItems,
    sort:state.products.sort
  }
}


export default connect(
  mapStateToProps,
  { sortProducts }
)(Filter);
