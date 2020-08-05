import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

ReactDOM.render(<App URL={'https://jsonplaceholder.typicode.com/users'} />,
  document.getElementById('root')
);
