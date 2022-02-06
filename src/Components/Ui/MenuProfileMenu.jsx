import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// import { FormControl } from 'react-bootstrap';

const MenuProfileMenu = forwardRef(
  ({ children, style, className }, ref) => {
    // const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
      >
        {children}
      </div>
    );
  },
);

MenuProfileMenu.displayName = 'MenyProfileMenu';

MenuProfileMenu.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  ref: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.string
};

export default MenuProfileMenu;