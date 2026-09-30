const initAccordeon = () => {
	const accordeonHeader = document.querySelector('.bibliography__title')
	const accordeonText = document.querySelector('.bibliography__menu')

	if (!accordeonHeader) return

	accordeonHeader.addEventListener('click', ()=> {
		accordeonHeader.classList.toggle('bibliography__title_active')
		accordeonText.classList.toggle('bibliography__menu_active')
	})
}

initAccordeon()


const showAllAccordeon = (selectorWrapper, parentSelector) => {
    const accordeonWrapper = document.querySelector(selectorWrapper)
	if (!accordeonWrapper) return

    accordeonWrapper.addEventListener('click', (e)=> {
		const accordeonItem = e.target.closest(parentSelector)
		if (!accordeonItem) return
		const accordeonDescription = accordeonItem.nextElementSibling
		if (!accordeonDescription) return

		accordeonItem.parentElement.classList.toggle('change-bg')
        accordeonItem.classList.toggle('accordeon-active-icon')
		accordeonDescription.classList.toggle('accordeon-active')
    })
}

showAllAccordeon('.accordeon__wrapper', '.accordeon__item')