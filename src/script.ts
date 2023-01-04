import productsList from './productsList/productsList';
import Product from './product/product';
import Button from './button/button';
import { ProductInterface } from './interface/interface';

const productsContainer: HTMLDivElement = document.querySelector('.products')!;
const categoriesUlList: HTMLUListElement =
	document.querySelector('.category-list')!;

const availableCategorues: string[] = ['Wszystkie'];

const renderProductList = (
	productList: ProductInterface[],
	renderPlace: HTMLElement
) => {
	productsList.forEach((product) => {
		const item = new Product(product);
		item.rander(renderPlace);
	});
};

const renderButtons = (
	categories: string[],
	renderPlace: HTMLElement,
	initialActive = 'wszystkie'
) => {
	categories.forEach((category) => {
		const button = new Button(category);

		if (category.toLowerCase() === initialActive.toLowerCase()) {
			button.render(renderPlace, 'active');
		} else {
			button.render(renderPlace);
		}
	});
};

const uniqueCategories = new Set(
	productsList.map((product) => product.category)
);

availableCategorues.splice(1, 0, ...uniqueCategories);

renderProductList(productsList, productsContainer);
renderButtons(availableCategorues, categoriesUlList);
