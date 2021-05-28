import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import NewProductPage from './Visualization/Components/NewProductPage';
import HomePageMockup from './Visualization/Components/HomePageMockup';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/product/add" component={NewProductPage} />
				<Route path="/homepage" component={HomePageMockup} />
				<Route path="/" component={App} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
