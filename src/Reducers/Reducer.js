const Reducer = (() => {
	const initialState = {
		userId: null,
		userInfo: {},
		cart: {
			products: [],
		},
	};

	const userReducer = (state = initialState, action) => {
		switch (action.type) {
			case 'LOGIN':
				localStorage.setItem(
					'userState',
					JSON.stringify({
						...state,
						...action.data,
						cart: state.cart,
					})
				);
				return {
					...state,
					...action.data,
					cart: state.cart,
				};
			case 'SIGN_OUT':
				localStorage.setItem(
					'userState',
					JSON.stringify({
						...state,
						userId: null,
						userInfo: {},
					})
				);
				return {
					...state,
					userId: null,
					userInfo: {},
				};
			default:
				return state;
		}
	};

	const cartReducer = (state = initialState, action) => {
		if (action.type === 'ADD') {
			localStorage.setItem(
				'userState',
				JSON.stringify({
					...state,
					cart: {
						products: state.cart.products.concat(action.data),
					},
				})
			);
			return {
				...state,
				cart: {
					products: state.cart.products.concat(action.data),
				},
			};
		}
		if (action.type === 'REMOVE') {
			localStorage.setItem(
				'userState',
				JSON.stringify({
					...state,
					cart: {
						products: state.cart.products.filter(
							(itemId) => itemId !== action.data.itemId
						),
					},
				})
			);

			return {
				...state,
				cart: {
					products: state.cart.products.filter(
						(itemId) => itemId !== action.data.itemId
					),
				},
			};
		}
		return state;
	};

	const addItem = (item) => {
		return {
			type: 'ADD',
			data: item,
		};
	};

	const removeItem = (itemId) => {
		return {
			type: 'REMOVE',
			data: {
				itemId,
			},
		};
	};

	const login = (userId, userInfo) => {
		return {
			type: 'LOGIN',
			data: {
				userId,
				userInfo,
			},
		};
	};

	const signOut = () => {
		return {
			type: 'SIGN_OUT',
		};
	};

	return {
		userReducer,
		cartReducer,
		login,
		signOut,
		addItem,
		removeItem,
	};
})();

export default Reducer;
