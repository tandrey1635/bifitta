const handleBurgerMenuNavigation = () => {
	const wrapper = document.querySelector('.wrapper')
    const burgerMenuBtn = document.querySelector('.burger__menu')
    const burgerMenuLine = document.querySelectorAll('.burger__menu__line')
    const burgerMenu = document.querySelector('.header__wrapper')

	if (!burgerMenuBtn) return

	const changeActiveClass = (selector) => {
		selector.forEach(selector=>{
            selector.classList.toggle('active__line')
        })
	}

    burgerMenuBtn.addEventListener('click', ()=>{
        burgerMenu.classList.toggle('header__mobile__active')
		burgerMenuBtn.classList.toggle('active__menu')
		document.body.classList.toggle('overflow')
		changeActiveClass(burgerMenuLine)
    })

	wrapper.addEventListener('click', (e)=>{
		if (e.target.classList.contains('header__link')) {
			burgerMenu.classList.remove('header__mobile__active')
			burgerMenuBtn.classList.remove('active__menu')
			document.body.classList.remove('overflow')
			changeActiveClass(burgerMenuLine)
		}
	})
}

handleBurgerMenuNavigation()