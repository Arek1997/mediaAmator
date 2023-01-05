import productsList from '../productsList/productsList';
import {
	findActiveCategoryButton,
	productsContainer,
	renderProductList,
} from '../script';
import filterProductsCategories from './filterProductsCategories';

const searchProducts = (searchName: string, arrToSearch = productsList) => {
	const activeCategory =
		findActiveCategoryButton()?.getAttribute('data-category')!;

	if (searchName.trim().length === 0) {
		return renderProductList(
			filterProductsCategories(activeCategory),
			productsContainer
		);
	} else {
		const newArr = arrToSearch.filter((product) =>
			product.name.toLowerCase().includes(searchName.toLowerCase())
		);

		const newFilteredArr = filterProductsCategories(activeCategory, newArr);

		if (newFilteredArr.length) {
			renderProductList(newFilteredArr, productsContainer);
		} else {
			productsContainer.innerHTML = `<p class="font-bold sm:text-xl md:text-3xl">Nie znaleziono żadnego produktu...</p>`;
		}
	}
};

export default searchProducts;
