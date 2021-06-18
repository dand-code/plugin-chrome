import React from 'react';
import '../style/toggleMode.scss';
//PropTypes
import PropTypes from 'prop-types';


export default function onOffToggle(props) {
  const updateActiveExtension = props.updateActiveExtension;

  return (  
    <label className="swtich-container">
      <input type="checkbox" id="switch" onChange={updateActiveExtension} />
      <div className="slider">
        <span className="on">ON</span>
        <span className="off">OFF</span>
      </div>
    </label> 
  )
}


onOffToggle.propTypes = {
  updateActiveExtension:PropTypes.function
};