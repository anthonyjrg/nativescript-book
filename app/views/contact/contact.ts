import {Dialogs} from "@nativescript/core"
const dialogsModule = Dialogs

export function onTap(args){
	console.log("Submit button tapped")
	dialogsModule.alert("Your message has been sent.")
}

