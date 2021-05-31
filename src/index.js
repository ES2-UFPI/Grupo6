import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Reducers/Reducer';

import App from './App';
import NewProductPage from './Visualization/Components/NewProductPage';
import HomePageMockup from './Visualization/Components/HomePageMockup';
import ProductPageMockup from './Visualization/Components/ProductPageMockup';
import ShoppingCart from './Visualization/Components/ShoppingCart';
import Header from './Visualization/Components/Header';

const store = createStore(
	combineReducers({ user: Reducer.userReducer, cart: Reducer.cartReducer })
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/product/add" component={NewProductPage} />
					<Route path="/homepage" component={HomePageMockup} />
					<Route path="/productMockup" component={ProductPageMockup} />
					<Route path="/shoppingCart" component={ShoppingCart} />
					<Route path="/" component={App} />
				</Switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
