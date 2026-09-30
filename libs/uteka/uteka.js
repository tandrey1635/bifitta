window.uteka = window.uteka || {};
(window.uteka._host = "widget.uteka.ru"), (window.uteka._queue = [])
window.uteka._loaded = false
window.uteka.onReady = function (callback) {
  	if (window.uteka._loaded) {
    	return callback()
  	}

  	window.uteka._queue.push(callback)
}

const script = document.createElement("script")
script.src = "https://cdn.uteka.ru/static/widgets/widget.compiled.js?l=" + Date.now()
script.async = true

script.addEventListener("load", function () {
  	window.uteka._loaded = true;
  	window.uteka._queue.forEach(function (callback) {
    	callback()
  	})

  	window.uteka.onReady(function () {
    	const widget = document.querySelector(".uteka-widget")

    	window.uteka.loadWidget(widget, {
      		productId: "400961",
    	})
  	})
})

document.head.appendChild(script)