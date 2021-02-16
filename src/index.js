import React from 'react';
import ReactDOM from 'react-dom';
import App from './router';
import 'bootstrap/scss/bootstrap.scss';
import './scss/index.scss';
import 'react-toastify/scss/main.scss';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
