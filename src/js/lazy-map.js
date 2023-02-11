import { isInScope } from "./common/global"

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showMap()
} )

const showMap = () => {

	const map = document.querySelector( '.iframe-map' )

	if( ! map ) return

	document.addEventListener( 'scroll', () => {
			if ( isInScope( '.contacts-map', window.scrollY ) ) {
				if( ! map.classList.contains( 'loaded' ) ) {
					map.src= 'https://yandex.ru/map-widget/v1/?um=constructor%3A03097818e7ed30df82992543874987859134fbf908cf6b65748d1643101348d9&amp;source=constructor'
					map.classList.add( 'loaded' )
				}
			}
		}
	)
}