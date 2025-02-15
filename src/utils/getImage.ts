export const getImage = (
	productID: ProductID,
	type: 'desktop' | 'tablet' | 'mobile' | 'thumbnail'
) => {
	const path = `../assets/products/image-${productID}-${type}.jpg`;
	return new URL(path, import.meta.url).href;
};
