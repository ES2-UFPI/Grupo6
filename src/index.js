import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import App from './App';
import NewProductPage from './Visualization/Components/NewProductPage';
import HomePageMockup from './Visualization/Components/HomePageMockup';
import ProductPageMockup from './Visualization/Components/ProductPageMockup';
import ShoppingCart from './Visualization/Components/ShoppingCart';
import Header from './Visualization/Components/Header';
import Cart from './Visualization/Components/Cart';
import store from './store'

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
					<Route path="/cart" component={Cart} />
					<Route path="/" component={App} />
				</Switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
