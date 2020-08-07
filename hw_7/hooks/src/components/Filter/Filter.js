import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

function Filter(props) {
  const [buttons, setButtons] = useState([
    {
      id: 'b1',
      text: 'Name',
      active: false
    },
    {
      id: 'b2',
      text: 'Username',
      active: false
    },
    {
      id: 'b3',
      text: 'Email',
      active: false
    }
  ]);

  const onFilterButtonClick = ({target}) => {
    const newButtons = buttons.map(button => {
      const isActive = button.text.toLowerCase() === target.text; 
      
      return { ...button, active: isActive }
    });

    setButtons(newButtons);

    props.changeSortBy(target.name);
  }

  return (
    <div className="d-flex justify-content-center m-3">
      <h2 className="mr-3">Sorting</h2>
      <div className="btn-group">
        {buttons.map(({id, text, active}) => (
          <button
            key={id}
            name={text.toLowerCase()}
            className={`btn btn-secondary${active ? ' active' : ''}`}
            type="button"
            onClick={onFilterButtonClick}>
              {text}
          </button>
        ))}
      </div>
    </div>
  );
}

Filter.propTypes = {
  changeSortBy: PropTypes.func
};

export default Filter;