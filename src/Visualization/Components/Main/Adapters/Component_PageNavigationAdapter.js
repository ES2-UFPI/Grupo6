const Component_PageNavigationAdapter = (componentPageObject) => {
	return {
		currentPage: Number.parseInt(componentPageObject.currentPage),
		numberOfPages: Number.parseInt(componentPageObject.numberOfPages),
		newPageLink: componentPageObject.newPageLink,
	};
};

export default Component_PageNavigationAdapter;
