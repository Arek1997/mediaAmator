import productsList from './productsList/productsList';
import Product from './product/product';
import Button from './button/button';
import { ProductInterface } from './interface/interface';

const productsContainer: HTMLDivElement = document.querySelector('.products')!;
const categoriesUlList: HTMLUListElement =
	document.querySelector('.category-list')!;

const categoryButtons = document.getElementsByClassName('btn');
const productButtons = document.getElementsByClassName('add-to-cart');
const cart: HTMLSpanElement = document.querySelector('.cart-text')!;
const clearCartButton: HTMLButtonElement =
	document.querySelector('.cart-clear')!;

let totalPrice = 0;

const availableCategorues: string[] = ['Wszystkie'];

const renderProductList = (
	productsToRenderList: ProductInterface[],
	renderPlace: HTMLElement
) => {
	renderPlace.innerHTML = '';
	productsToRenderList.forEach((product) => new Product(product, renderPlace));
};

const renderButtons = (
	categories: string[],
	renderPlace: HTMLElement,
	initialActive = 'wszystkie'
) => {
	categories.forEach((category) => {
		if (category.toLowerCase() === initialActive.toLowerCase()) {
			new Button(category, renderPlace, initialActive);
		} else {
			new Button(category, renderPlace);
		}
	});
};

const filterProductsCategories = (
	filterValue = 'wszystkie',
	arrToFilter = productsList
) => {
	if (filterValue === 'wszystkie') {
		return arrToFilter;
	} else {
		const filteredArr = arrToFilter.filter(
			(product) => product.category.toLowerCase() === filterValue
		);
		return filteredArr;
	}
};

const toggleActiveClass = (e: MouseEvent) => {
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

const addToCart = (e: MouseEvent) => {
	const target = e.target as HTMLButtonElement;

	clearCartButton.classList.remove('hidden');
	const productPrice = target.parentElement?.querySelector('.current-price')
		?.textContent as string;

	totalPrice += parseFloat(productPrice);
	cart.textContent = totalPrice.toFixed(2) + 'zł';
};

const clearCart = () => {
	totalPrice = 0;
	cart.textContent = 'Koszyk';
	clearCartButton.classList.add('hidden');
};

const uniqueCategories = new Set(
	productsList.map((product) => product.category)
);

availableCategorues.splice(1, 0, ...uniqueCategories);

renderProductList(productsList, productsContainer);
renderButtons(availableCategorues, categoriesUlList);

clearCartButton.addEventListener('click', clearCart);

(Array.from(categoryButtons) as HTMLButtonElement[]).forEach((button) =>
	button.addEventListener('click', toggleActiveClass)
);

(Array.from(productButtons) as HTMLButtonElement[]).forEach((button) => {
	button.addEventListener('click', addToCart);
});
