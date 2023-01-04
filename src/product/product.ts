import { ProductInterface } from '../interface/interface';

export default class Product {
	constructor(public product: ProductInterface) {}

	rander(placeToRender: HTMLElement) {
		const html = `
    <article
						class="product ${
							this.product.sale ? 'sale' : ''
						} relative flex max-w-[350px] cursor-pointer flex-col items-center gap-2 rounded-2xl bg-white p-4 transition-shadow duration-300 hover:shadow-2xl"
					>
						<span
							class="sale-text absolute top-0 right-0 rounded-md bg-black/75 px-2 py-1 text-yellow-300"
							>Promocja</span
						>
						<img
							src=${this.product.image}
							alt=${this.product.name}
							class="max-w-[230px]"
						/>
						<h4 class="font-bold sm:text-xl md:text-2xl">${this.product.name}</h4>
						<p class="text-center">
							${this.product.description}
						</p>

       			<div class="price-wrapper flex items-center justify-center gap-3">
							<span
								class="old-price relative text-sm font-bold before:absolute before:top-1/2 before:h-[2px] before:w-full before:-translate-y-1/2 before:rotate-[-15deg] before:bg-black"
								>${this.product.sale ? this.product.price.toFixed(2) + 'zł' : ''}</span
							>
							<span
								class="current-price font-bold text-green-800 sm:text-xl md:text-2xl"
								>${
									this.product.sale
										? (this.product.price - this.product.saleAmount!).toFixed(2)
										: this.product.price.toFixed(2)
								}zł</span
							>
						</div>
						<button
							class="rounded-lg bg-black py-2 px-3 text-white transition-colors hover:text-yellow-300 sm:text-lg"
						>
							Dodaj do koszyka
						</button>
		</article>          
    `;

		placeToRender.insertAdjacentHTML('beforeend', html);
	}
}
