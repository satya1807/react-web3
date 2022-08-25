import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MetamaskProvider from './contexts/Metamask';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({ theme: 'colored' });

ReactDOM.render(
  <React.StrictMode>
    <MetamaskProvider>
      <App />
    </MetamaskProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
