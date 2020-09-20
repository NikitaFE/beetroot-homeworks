import React from 'react';
import {render, cleanup} from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';
import App from '../components/App';

describe('<App />', () => {
  afterEach(cleanup);

  it('should make snapshot', () => {
    const {container} = render(<Router><App /></Router>);
    expect(container.firstChild).toMatchSnapshot();
  })
});
