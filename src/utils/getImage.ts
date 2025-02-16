const images = import.meta.glob('../assets/products/*.jpg', {eager: true}) as Record<
	string,
	{default: string}
>;

export const getImage = (productID: ProductID, thumbnail?: boolean): string => {
	const type = thumbnail ? 'thumbnail' : window.innerWidth > 650 ? 'desktop' : 'mobile';
	const path = `../assets/products/image-${productID}-${type}.jpg`;

	return images[path]?.default || '';
};
