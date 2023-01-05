import productsList from './productsList/productsList';
import Product from './product/product';
import Button from './button/button';
import { ProductInterface } from './interface/interface';
import addToCart from './cart/cart';
import filterProductsCategories from './helpers/filterProductsCategories';
import searchProducts from './helpers/searchProducts';

export const productsContainer: HTMLDivElement =
	document.querySelector('.products')!;
const categoriesUlList: HTMLUListElement =
	document.querySelector('.category-list')!;

const categoryButtons = document.getElementsByClassName('btn');
const productButtons = document.getElementsByClassName('add-to-cart');

const searchInput: HTMLInputElement = document.querySelector('#search')!;
const searchAction: HTMLLabelElement = document.querySelector('.search label')!;

const availableCategorues: string[] = ['Wszystkie'];

export const renderProductList = (
	productsToRenderList: ProductInterface[],
	renderPlace: HTMLElement
) => {
	renderPlace.innerHTML = '';
	productsToRenderList.forEach((product) => new Product(product, renderPlace));

	(Array.from(productButtons) as HTMLButtonElement[]).forEach((button) => {
		button.addEventListener('click', addToCart);
	});
};

const renderButtons = (
	categories: string[],
	renderPlace: HTMLElement,
	initialActive = 'wszystkie'
) => {
	renderPlace.innerHTML = '';
	categories.forEach((category) => {
		if (category.toLowerCase() === initialActive.toLowerCase()) {
			new Button(category, renderPlace, initialActive);
		} else {
			new Button(category, renderPlace);
		}
	});
};

export const findActiveCategoryButton = () => {
	const buttonsArr = Array.from(categoryButtons) as HTMLButtonElement[];
	const activeButton = buttonsArr.find((button) =>
		button.classList.contains('active')
	);
	return activeButton;
};

const toggleActiveClass = (e: MouseEvent) => {
	searchInput.value = '';
	const buttonsArr = Array.from(categoryButtons) as HTMLButtonElement[];
	const target = e.target as HTMLButtonElement;
	const targetCategory = target.dataset.category?.toLowerCase();

	buttonsArr.forEach((button) => button.classList.remove('active'));
	target.classList.add('active');

	renderProductList(
		filterProductsCategories(targetCategory),
		productsContainer
	);
};

const uniqueCategories = new Set(
	productsList.map((product) =>
		product.category.replace(
			product.category[0],
			product.category[0].toUpperCase()
		)
	)
);

availableCategorues.splice(1, 0, ...uniqueCategories);

renderProductList(productsList, productsContainer);
renderButtons(availableCategorues, categoriesUlList);

searchAction.addEventListener('click', () => searchProducts(searchInput.value));

document.addEventListener('keydown', (e: KeyboardEvent) => {
	e.code === 'Enter' ? searchProducts(searchInput.value) : null;
});

(Array.from(categoryButtons) as HTMLButtonElement[]).forEach((button) =>
	button.addEventListener('click', toggleActiveClass)
);
