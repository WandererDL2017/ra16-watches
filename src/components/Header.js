import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { header } = props;
  return (
    <h1 className='header'>{header}</h1>
  );
}

Header.defaultProps = {
  header: `Мировое время`
};

Header.propTypes = {
  header: PropTypes.string
};

export default Header;