import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const MenuProfileButton = forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="btn"
  >
    <Image rounded
      width={32}
      height={32}
      src="https://github.com/jlsa.png" alt="" />
    {' '}
    {children}
    &#x25bc;
  </a>
));

MenuProfileButton.displayName = 'MenuProfileButton';

MenuProfileButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.any,
  ref: PropTypes.any,
};

export default MenuProfileButton;