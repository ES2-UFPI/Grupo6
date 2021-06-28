import Firebase from '../Data/Firebase';
import ProductLogic from './ProductLogic';

const CouponsLogic = (() => {
	const createCoupon = async (productId, newValue, userId) => {
		const couponId = await Firebase.createCoupon();
		const originalValue = (await ProductLogic.getProductInfo(productId)).price;
		await Firebase.setCouponProductId(couponId, productId);
		await Firebase.setCouponUserId(couponId, userId);
		await Firebase.setCouponReduction(
			couponId,
			(newValue - originalValue) / originalValue
		);
		return couponId;
	};

	const findCoupon = async (couponId) => {
		try {
			return await Firebase.getCoupon(couponId);
		} catch (_error) {
			return null;
		}
	};

	return {
		createCoupon,
		findCoupon,
	};
})();

export default CouponsLogic;
