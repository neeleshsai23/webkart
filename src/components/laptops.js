import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from './actions/actions';

class Laptops extends Component {
  add = (item) => {
    this.props.addToCart(item);
  };

  render() {
    return (
      <div className='productpage'>
        {this.props.laptops.details.map((item, index) => (
          <div className='products' key={item.name}>
            <div>
              <img className='productimg' src={item.image} />
            </div>
            <div className='details'>
              <div>
                <p>{item.name}</p>
              </div>
              <div>
                <i className='fa fa-inr' aria-hidden='true'></i>
                <p>{item.price}</p>
              </div>
              <div>
                <button
                  className='addcartbtn'
                  onClick={() => {
                    this.add(item);
                  }}
                >
                  <i
                    className='fa fa-cart-plus fa-lg cartbtn'
                    aria-hidden='true'
                  ></i>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    laptops: state.laptops,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Laptops);
