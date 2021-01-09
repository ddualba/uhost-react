import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import MobileLinks from '../shared/components/Navigation/MobileLinks';
import SideDrawer from '../shared/components/Navigation/SideDrawer';
import Backdrop from '../shared/components/UIElements/Backdrop';
import './Navbar.scss';

const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
          <MobileLinks />
        </nav>
      </SideDrawer>

      <header className='main-header'>
        <div>
          <button className='toggle-button' onClick={openDrawerHandler}>
            <span className='toggle-button__bar'></span>
            <span className='toggle-button__bar'></span>
            <span className='toggle-button__bar'></span>
          </button>
          <Link to='/' className='main-header__brand'>
            <img
              src='images/uhost-icon.png'
              alt='uHost - Your favorite hosting company'
            />
          </Link>
          {/* <a href='index.html' className='main-header__brand'></a> */}
        </div>
        <nav className='main-nav'>
          <ul className='main-nav__items'>
            <li className='main-nav__item'>
              <Link to='/packages'>Packages</Link>
            </li>
            <li className='main-nav__item'>
              <Link to='/customers'>Customers</Link>
            </li>
            <li className='main-nav__item main-nav__item--cta'>
              <Link to='/start-hosting'>Start Hosting</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navbar;
