import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Reducers/Reducer';

import RegisterProductPage from './Visualization/Components/Products/RegisterProductPage';
import HomePage from './Visualization/Components/Navigation/HomePage';
import ProductPageMockup from './Visualization/Components/Products/ProductPageMockup';
import CartPage from './Visualization/Components/Products/CartPage';
import Header from './Visualization/Components/Main/Header';
import FootBar from './Visualization/Components/Main/FootBar';
import CategoryPage from './Visualization/Components/Navigation/CategoryPage';
import ProductPage from './Visualization/Components/Products/ProductPage';
import History from './Visualization/Components/Accounts/History';
import NotificationPage from './Visualization/Components/Navigation/NotificationPage';
import SearchPage from './Visualization/Components/Navigation/SearchPage';

const store = createStore(
	combineReducers({ user: Reducer.userReducer, cart: Reducer.cartReducer })
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/product/search" component={SearchPage} />
					<Route path="/product/category/:category" component={CategoryPage} />
					<Route path="/product/add" component={RegisterProductPage} />
					<Route path="/product/:productId" component={ProductPage} />
					<Route path="/productMockup" component={ProductPageMockup} />
					<Route path="/shoppingCart" component={CartPage} />
					<Route path="/history" component={History} />
					<Route path="/notifications" component={NotificationPage} />
					<Route path="/" component={HomePage} />
				</Switch>
				<FootBar />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
