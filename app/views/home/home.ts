import { Frame } from "@nativescript/core/ui/frame";

let frameModule = Frame

let navigateToAbout = function () {
	let navigationEntry = {
		moduleName: "views/about/about",
		transition: {
			name: "slideLeft"
		}
	}
	frameModule.topmost().navigate(navigationEntry)
}

let navigateToContact = function () {
	let navigationEntry = {
		moduleName: "views/contact/contact",
			transition: {
			name: "slideLeft"
		}
	}
	frameModule.topmost().navigate(navigationEntry)
}

let navigateToProducts = function () {
	let navigationEntry = {
		moduleName: "views/products/products",
		transition: {
			name: "slideLeft"
		}
	}
	frameModule.topmost().navigate(navigationEntry)
}

export {navigateToAbout, navigateToContact, navigateToProducts}

