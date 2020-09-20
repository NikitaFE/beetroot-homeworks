import React from 'react';
import {render, cleanup, shallow} from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';
import FilmsPage from '../components/FilmsPage';

describe('<FilmsPage />', () => {
  afterEach(cleanup);

  it('should make snapshot', () => {
    const {container} = render(<Router><FilmsPage location={{pathname: '/'}} /></Router>);
    expect(container.firstChild).toMatchSnapshot();
  });
});


