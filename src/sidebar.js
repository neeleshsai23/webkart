import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [['Mobiles', '/mobiles']],
    };
  }
  menuClicked = () => {
    document.getElementById('menu').style.left = '0vw';
  };

  menuClose = () => {
    document.getElementById('menu').style.left = '-25vw';
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <button className='menubtn' onClick={this.menuClicked}>
          <i class='fa fa-bars fa-2x'></i>
        </button>
        <div id='menu' className='sidebar'>
          <div className='outline'>
            <NavLink
              onClick={this.menuClose}
              exact
              to='/'
              className='link'
            ></NavLink>
            {categories.map((item) => (
              <NavLink
                onClick={this.menuClose}
                to={item[1]}
                key={item[0]}
                className='link'
              >
                <div className='itemdiv'>{item[0]}</div>
              </NavLink>
            ))}
            <button onClick={this.menuClose} className='closemenu'>
              <i class='fa fa-arrow-left fa-2x' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
