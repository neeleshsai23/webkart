import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from './actions/actions';

class Mobiles extends Component {
  add = (id) => {
    this.props.addToCart(id);
  };

  render() {
    return (
      <div className='productpage'>
        {this.props.mobiles.details.map((item, index) => (
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
                    this.add(item.id);
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
    mobiles: state.mobiles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mobiles);
