import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Reducers/Reducer';

import App from './App';
import RegisterProductPage from './Visualization/Components/Products/RegisterProductPage';
import HomePageMockup from './Visualization/Components/Navigation/HomePageMockup';
import ProductPageMockup from './Visualization/Components/Products/ProductPageMockup';
import CartPage from './Visualization/Components/Products/CartPage';
import Header from './Visualization/Components/Main/Header';
import FootBar from './Visualization/Components/Main/FootBar';

const store = createStore(
	combineReducers({ user: Reducer.userReducer, cart: Reducer.cartReducer })
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/product/add" component={RegisterProductPage} />
					<Route path="/homepage" component={HomePageMockup} />
					<Route path="/productMockup" component={ProductPageMockup} />
					<Route path="/shoppingCart" component={CartPage} />
					<Route path="/" component={App} />
				</Switch>
				<FootBar />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
