import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
const AppRouter = () => {
	return (
		//from node_modules from react library//
		<Router>
			{/* Passing the props here below */}
			<NavBar routes={routes} />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						//Grabbing component key from routes.js//
						component={() => <Component page={key} />}
					></Route>
				))}
			</Switch>
		</Router>
	);
};

export default AppRouter;
