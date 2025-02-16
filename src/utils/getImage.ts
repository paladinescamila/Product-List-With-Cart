export const getImage = (productID: ProductID, thumbnail?: boolean) => {
	const type = thumbnail ? 'thumbnail' : window.innerWidth > 650 ? 'desktop' : 'mobile';
	const path = `../assets/products/image-${productID}-${type}.jpg`;
	return new URL(path, import.meta.url).href;
};
