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
          {this.props.mobiles.totalItems > 0 && (
            <div className='countdiv'>
              <span>{this.props.mobiles.totalItems}</span>
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
    mobiles: state.mobiles,
  };
};

export default connect(mapStateToProps)(Header);
