import React from 'react';
//PropTypes
import PropTypes from 'prop-types';

export default function onOffToggle(props) {
  const updateActiveExtension = props.updateActiveExtension;
  
  return (  
    <input type="checkbox" onChange={updateActiveExtension} />
  )
}


onOffToggle.propTypes = {
  updateActiveExtension:PropTypes.function
};