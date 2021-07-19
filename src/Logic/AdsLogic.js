import ProductLogic from './ProductLogic';
import UserLogic from './UserLogic';

const AdsLogic = (() => {
	const generateRandomCategoryAds = async (categories, numberOfAds) => {
		const products = (
			await Promise.all(
				categories.map(
					async (category) =>
						await ProductLogic.getProducts(null, null, category)
				)
			)
		).reduce((previous, current) => previous.concat(current), []);
		return Array(numberOfAds)
			.fill(0)
			.map((_v) => products[Math.ceil(Math.random() * products.length)])
			.reduce(
				(previous, current) =>
					previous.includes(current) ? previous : previous.concat([current]),
				[]
			);
	};

	const generateRandomAds = async (userId, numberOfAds = 3) => {
		if (userId !== null && userId !== undefined) {
			const userCategoryClicks = (await UserLogic.getUser(userId))
				.categoryClicks;
			return generateRandomCategoryAds(
				Object.keys(userCategoryClicks)
					.sort((a, b) => userCategoryClicks[b] - userCategoryClicks[a])
					.filter((_c, index) => index < numberOfAds),
				numberOfAds
			);
		}
		const products = await ProductLogic.getProducts('');
		return Array(numberOfAds)
			.fill(0)
			.map((_v) => products[Math.ceil(Math.random() * products.length)])
			.reduce(
				(previous, current) =>
					previous.includes(current) ? previous : previous.concat([current]),
				[]
			);
	};

	return {
		generateRandomAds,
	};
})();

export default AdsLogic;
