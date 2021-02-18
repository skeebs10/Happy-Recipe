import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// BrowserRouter is a <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
// Route component renders some UI when its path matches the current URL.
import routes from './routes';
import Navbar from '../Components/Navbar';
import { toast, ToastContainer } from 'react-toastify';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				{/* switch between browsers */}
				{/* Renders the first child exclusively. All children of switch should be route */}
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						component={props => <Component page={key} {...props} />}
						exact
					/>
				))}
			</Switch>
			<ToastContainer position={toast.POSITION.TOP_RIGHT} />
		</Router>
	);
};

export default App;
