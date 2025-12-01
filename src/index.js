import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // ഇതാണ് CSS ഫയലിനെ വിളിക്കുന്നത്
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);