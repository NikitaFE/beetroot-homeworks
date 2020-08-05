import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {
  state = {
    buttons: [
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
    ]
  }

  onFilterButtonClick = ({target}) => {
    this.setState(({buttons}) => {
      buttons.forEach(button => {
        const lowerName = button.text.toLowerCase();
        button.active = false;
        if(lowerName === target.text) button.active = true;
      })
    })

    this.props.changeSortBy(target.name);
  }

  render() {
    const { buttons } = this.state; 
    return (
      <div className="d-flex justify-content-center m-3">
        <h2 className="mr-3">Filter</h2>
        <div className="btn-group">
          {buttons.map(({id, text, active}) => (
            <button
              key={id}
              name={text.toLowerCase()}
              className={`btn btn-secondary${active ? ' active' : ''}`}
              type="button"
              onClick={this.onFilterButtonClick}>
                {text}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
