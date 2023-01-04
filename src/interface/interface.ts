export interface ProductInterface {
	id: number;
	name: string;
	description: string;
	category: string;
	price: number;
	image: string;
	sale?: boolean;
	saleAmount?: number;
}
