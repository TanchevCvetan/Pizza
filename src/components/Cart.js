import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      
      <div className="ui right floated primary button absolute">
        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map(item => {
               return <li key={item.id}>
                  <b>{item.name} </b>
                  x{item.count}
                  <button onClick={()=>this.props.removeFromCart(this.props.cartItems,item)}>x</button>
                </li>;
              })}
            </ul>
              Total:${cartItems.reduce((a,c)=>a+c.price*c.count,0)}
              <br/>
              <button className="ui button secondary">Check out</button>
          </div>
        )}
      </div>
            
    );
  
  }
}


const mapStateToProps = state =>({
  cartItems: state.cart.items
})

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Cart);
