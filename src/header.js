import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from './cart';

class Header extends Component {
  cartOpen = () => {
    document.getElementById('cartitem').style.display = 'flex';
  };
  render() {
    return (
      <nav className='navbar'>
        <div className='navitem-left'>
          <NavLink exact to='/' className='navlink'>
            Techkart
          </NavLink>
        </div>
        <div className='navitem-right' onClick={this.cartOpen}>
          {this.props.cart.totalItems > 0 && (
            <div className='countdiv'>
              <span>{this.props.cart.totalItems}</span>
            </div>
          )}
          <a className='navlink cart'>
            <i className='fa fa-shopping-cart fa-lg' aria-hidden='true'></i>
          </a>
        </div>
        <Cart />
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Header);
