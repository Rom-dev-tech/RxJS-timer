import { StrictMode } from 'react';
import { render } from 'react-dom';
import 'modern-normalize/modern-normalize.css';

import App from 'components/APP/App';
import 'index.scss';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
