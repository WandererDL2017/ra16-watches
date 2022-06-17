import React from 'react';
import PropTypes from 'prop-types';
import Watches from './Watches';

function WatchesList({ watchesList, timezoneUTC, handleDelete }) {
    return (
      <div className='list'>
        {watchesList.map(watchesName => (
          <Watches
            key={watchesName.id}
            watchesName={watchesName}
            timezoneUTC={timezoneUTC}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  };
  
  WatchesList.propTypes = {
    watchesList: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string,
        offset: PropTypes.string,
        id: PropTypes.string
      }).isRequired
    ).isRequired,
    timezoneUTC: PropTypes.object,
    handleDelete: PropTypes.func.isRequired
  };
  
  export default WatchesList;