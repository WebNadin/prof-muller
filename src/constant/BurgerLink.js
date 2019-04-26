import React from 'react';
import PageDate from './PageDate';
import { Link } from 'react-router-dom'


const BurgerLink = () => (
    <Link to="/" className={this.props.active ? 'nn-mobile-nav__burger js-mobile-nav-opened' : 'nn-mobile-nav__burger'}
          onClick={this.props.toggleClass}>

    </Link>
);

export default BurgerLink;