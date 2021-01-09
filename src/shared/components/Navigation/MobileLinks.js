import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileLinks.scss';

const MobileLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/packages'>Packages</NavLink>
      </li>
      <li>
        <NavLink to='/customers'>Customers</NavLink>
      </li>
      <li>
        <NavLink to='/start-hosting'>Start Hosting</NavLink>
      </li>
    </ul>
  );
};

export default MobileLinks;
