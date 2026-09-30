gsap.registerPlugin(ScrollTrigger)


/* Активный состав */
const compaundImgs = gsap.utils.toArray(".compound__img")
gsap.set(compaundImgs.slice(2), { autoAlpha: 0 })

const isHorisontalTablet = window.innerWidth <= 991
const isVerticalTablet = window.innerWidth <= 768
const isBigMobile = window.innerWidth <= 480
const isMediumMobile = window.innerWidth <= 450
const isMobile = window.innerWidth <= 425
const isSmallMobile = window.innerWidth <= 375

const compaundTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".compound",
		start: "top top",
		end: `${isMobile ? '+=1000' : '+=1500'}`,
		scrub: 1,
		pin: true,
		snap: {
			snapTo: 1,
			duration: 0.01
		}
	}
})

compaundTl.to(compaundImgs[1], { autoAlpha: 0, scale: isHorisontalTablet ? 1.5 : 2 })
compaundTl.to(compaundImgs[0], { autoAlpha: 1, scale: isMobile ? 0.45 : 0.7 })
compaundTl.to(compaundImgs[2], { autoAlpha: 1, scale: 1 })


/* Симптомы */
const symptomsImgs = gsap.utils.toArray(".symptoms__img")
gsap.set(symptomsImgs[7], { scale: 0.7, autoAlpha: 0 })
gsap.set([symptomsImgs[8], symptomsImgs[9]], { autoAlpha: 0 })

const symptomsTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".symptoms",
		start: "top top",
		end: `${isMobile ? '+=1500' : '+=2000'}`,
		pin: true,
		scrub: 1,
		snap: {
      		snapTo: 1/3,
      		duration: 0.1
    	}
	}
})

symptomsTl.to(symptomsImgs[0], { x: '-50%', y: '-100%' }, '<')
symptomsTl.to(symptomsImgs[1], { x: '-100%', y: '-50%' }, '<')
symptomsTl.to(symptomsImgs[2], { x: '-25%' }, '<')
symptomsTl.to(symptomsImgs[3], { x: '50%', y: '-100%' }, '<')
symptomsTl.to(symptomsImgs[4], { x: '100%', y: '-50%' }, '<')
symptomsTl.to(symptomsImgs[5], { x: isBigMobile ? 0 : '50%', y: isMobile ? '100%' : '25%' }, '<')
symptomsTl.to(symptomsImgs[6], { x: '25%' }, '<')
symptomsTl.to(symptomsImgs[7], { scale: 1, autoAlpha: 1 }, '<')
symptomsTl.to(symptomsImgs[7], { scale: 1.5, x: isSmallMobile ? '-20%' : '' }, '+=0.5')
symptomsTl.to(symptomsImgs[0], { x: '-200%', scale: 1.2, autoAlpha: 0 }, '<')
symptomsTl.to(symptomsImgs[1], { x: '-200%', scale: 1.2, autoAlpha: 0 }, '<')
symptomsTl.to(symptomsImgs[2], { x: '-100%', scale: 1.2, autoAlpha: 0 }, '<')
symptomsTl.to(symptomsImgs[3], { x: '200%', scale: 1.2, autoAlpha: 0 }, '<')
symptomsTl.to(symptomsImgs[4], { x: '200%', scale: 1.2, autoAlpha: 0 }, '<')
symptomsTl.to(symptomsImgs[5], { x: isBigMobile ? 0 : '150%', scale: 1.2, autoAlpha: 0 }, '<')
symptomsTl.to(symptomsImgs[6], { x: '100%', scale: 1.2, autoAlpha: 0 }, '<')
symptomsTl.to(symptomsImgs[7], { x: isMediumMobile ? '-25%' : isBigMobile ? '-10%' : isVerticalTablet ? '-60%' : '-80%', y: isBigMobile ? '35%' : isHorisontalTablet ? '15%' : '5%' }, '+=0.5')
symptomsTl.to(symptomsImgs[8], { y: '5%', autoAlpha: 1 }, '<')
symptomsTl.to(symptomsImgs[9], { y: '5%', autoAlpha: 1 }, '<')


/* Препарат способствует */
const helpItems = gsap.utils.toArray(".help__list")
gsap.set(helpItems, { autoAlpha: 0 })

const helpTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".help",
		start: "top top",
		end: `${isMobile ? '+=1500' : '+=2500'}`,
		scrub: 1,
		pin: true,
	}
})

helpTl.to(helpItems[0], { autoAlpha: 1, duration: 0.5, y: 0 }, '+=1')
helpTl.to(helpItems[1], { autoAlpha: 1, duration: 0.5, y: 0 }, '+=1')
helpTl.to(helpItems[2], { autoAlpha: 1, duration: 0.5, y: 0 }, '+=1')
helpTl.to(helpItems[0], { autoAlpha: 0, duration: 0.5, y: -600 }, '+=1')
helpTl.to([helpItems[1], helpItems[2], helpItems[3]], { autoAlpha: 1, y: isMobile ? -100 : -150, duration: 0.5 }, '<')
helpTl.to(helpItems[1], { duration: .5, y: -600 }, '+=1')
helpTl.to([helpItems[2], helpItems[3], helpItems[4]], { autoAlpha: 1, y: isMobile ? -200 : -300, duration: 0.5 }, '<')