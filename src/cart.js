import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from './components/actions/actions';

class Cart extends Component {
  cartClose = () => {
    document.getElementById('cartitem').style.display = 'none';
  };

  remove(id) {
    this.props.removeFromCart(id);
  }

  decrease(id) {
    this.props.decreaseQuantity(id);
  }

  increase(id) {
    this.props.increaseQuantity(id);
  }

  render() {
    return (
      <div id='cartitem' className='cartlayout'>
        <div className='topdiv'>
          <button className='closebtn' onClick={this.cartClose}>
            <i className='fa fa-window-close fa-2x' aria-hidden='true'></i>
          </button>
        </div>
        <div className='cartitems'>
          {this.props.cart.cartItems.map((item, index) => (
            <div className='cartdivs'>
              <img className='cartimgs' src={item.image} />
              <div className='detailsdiv'>
                <p className='itemname'>{item.name}</p>
                <div>
                  <button
                    onClick={() => this.decrease(item.id)}
                    className='decbtn'
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => this.increase(item.id)}
                    className='incbtn'
                  >
                    +
                  </button>
                </div>
                <button
                  className='removebtn'
                  onClick={() => this.remove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mobiles: state.mobiles,
    laptops: state.laptops,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
