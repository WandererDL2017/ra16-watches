import React from 'react';
import PropTypes from 'prop-types';

function Watches({ watchesName, timezoneUTC, handleDelete }) {
  return (
    <div className='watch'>
      <p className='watch-name'>{watchesName.city}</p>
      <p>{timezoneUTC.utcOffset(Number(watchesName.offset)).format("hh:mm:ss")}</p>
      <button onClick={() => handleDelete(watchesName.id)}>
        &#10006;
      </button>
    </div>
  );
}

Watches.propTypes = {
  watchesName: PropTypes.shape({
    city: PropTypes.string,
    offset: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  timezoneUTC: PropTypes.object,
  handleDelete: PropTypes.func.isRequired
};

export default Watches;