const Reducer = (() => {
	const initialState = {
		userId: null,
		userInfo: {},
	};

	const userReducer = (state = initialState, action) => {
		switch (action.type) {
			case 'LOGIN':
				localStorage.setItem('userState', JSON.stringify({ ...action.data }));
				return { ...action.data };
			case 'SIGN_OUT':
				localStorage.setItem(
					'userState',
					JSON.stringify({
						userId: null,
						userInfo: {},
					})
				);
				return {
					userId: null,
					userInfo: {},
				};
			default:
				return state;
		}
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
		login,
		signOut,
	};
})();

export default Reducer;
