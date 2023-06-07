import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Delete this:
// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// And add this:
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

