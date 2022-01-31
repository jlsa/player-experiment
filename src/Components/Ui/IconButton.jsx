import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

const IconButton = ({
  variant = 'link',
  to = '/404',
  leftIcon = null,
  rightIcon = null,
  size = 'sm',
  onCustomClick = null,
  children,
  ...props
}) => {
  let navigate = useNavigate();
  return (
    <Button
      size={size}
      variant={variant}
      onClick={() => {
        if (onCustomClick) {
          onCustomClick();
        } else {
          navigate(to);
        }
      }}
      {...props}
    >
      {leftIcon && <>{<FontAwesomeIcon icon={leftIcon} />}{' '}</>}
      {children}
      {rightIcon && <>{' '}{<FontAwesomeIcon icon={rightIcon} />}</>}
    </Button>
  );
};

IconButton.propTypes = {
  variant: PropTypes.string,
  to: PropTypes.any,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  size: PropTypes.any,
  onCustomClick: PropTypes.any,
  children: PropTypes.any
};

export default IconButton;