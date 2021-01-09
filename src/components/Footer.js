import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='main-footer'>
      <nav>
        <ul className='main-footer__links'>
          <li className='main-footer__link'>
            <a href='/#'>Support</a>
          </li>
          <li className='main-footer__link'>
            <a href='/#'>Terms of Use</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
