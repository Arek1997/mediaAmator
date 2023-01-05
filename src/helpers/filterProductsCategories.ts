import productsList from '../productsList/productsList';

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

export default filterProductsCategories;
