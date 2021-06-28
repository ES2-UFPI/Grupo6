const Reducer = (() => {
	const initialState = {
		userId: null,
		userInfo: {},
		cart: {
			products: [],
		},
		talkingToSeller: null,
	};

	const userReducer = (state = initialState, action) => {
		switch (action.type) {
			case 'LOGIN':
				localStorage.setItem(
					'userState',
					JSON.stringify({
						...state,
						...action.data,
					})
				);
				return {
					...state,
					...action.data,
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

	const chatReducer = (state = initialState, action) => {
		if (action.type === 'OPEN_CHAT') {
			return {
				...state,
				talkingToSeller: action.data,
			};
		}
		if (action.type === 'CLOSE_CHAT') {
			return {
				...state,
				talkingToSeller: null,
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

	const openChat = (sellerId, sellerName) => {
		return {
			type: 'OPEN_CHAT',
			data: {
				id: sellerId,
				name: sellerName,
			},
		};
	};

	const closeChat = () => {
		return {
			type: 'CLOSE_CHAT',
		};
	};

	return {
		userReducer,
		cartReducer,
		chatReducer,
		login,
		signOut,
		addItem,
		removeItem,
		openChat,
		closeChat,
	};
})();

export default Reducer;
