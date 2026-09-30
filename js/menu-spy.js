const initialMenuSpy = () => {
    const menu = document.querySelector('#menu__spy')

	if(typeof MenuSpy === 'undefined' || !menu) return

    const menuSpy = new MenuSpy(menu, {
        activeClass: 'modal__spy__active',
    });
}

initialMenuSpy()