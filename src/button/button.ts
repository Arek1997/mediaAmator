export default class Button {
	constructor(public name: string) {}

	render(placeToRender: HTMLElement, active?: string) {
		const html = `
        <li>
            <button
                class="${
									active ? 'active' : ''
								} cursor-pointer rounded-xl py-2 px-4 text-sm transition-colors duration-300 hover:bg-black hover:text-yellow-300 sm:text-base md:text-lg xl:rounded-md xl:px-10"
            >
              ${this.name}
            </button>
        </li>
    `;

		placeToRender.insertAdjacentHTML('beforeend', html);
	}
}
