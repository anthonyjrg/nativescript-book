import { Frame } from "@nativescript/core/ui/frame";

let frameModule = Frame

let onTap = function () {
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

export {onTap, navigateToContact}

