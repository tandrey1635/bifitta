const showMore = (showMoreBtn, selectorItems, showMoreItems, showElementSelector) => {
	const btn = document.querySelector(showMoreBtn)
	const items = document.querySelectorAll(selectorItems)

	if (!btn) return

	let showItems = showMoreItems

	Array.from(items).slice(0, showItems).forEach(item=>{
		item.classList.add(showElementSelector)
	})

	btn.addEventListener('click', (e)=> {
		e.preventDefault()

		items.forEach(item=>{
			item.classList.add(showElementSelector)
		})

		btn.classList.add('hide')
	})
}

showMore('.btn_faq', '.accordeon', 3, 'show-accoreon')