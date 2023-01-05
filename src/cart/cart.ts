const cart: HTMLSpanElement = document.querySelector('.cart-text')!;
const clearCartButton: HTMLButtonElement =
	document.querySelector('.cart-clear')!;

let totalPrice = 0;

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

clearCartButton.addEventListener('click', clearCart);

export default addToCart;
