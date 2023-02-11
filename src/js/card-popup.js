import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'


document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	cardPopup()
} )

const cardPopup = () => {
	const cardWrapper = document.querySelector( '.popup-wrapper' )
	const cardBtn     = document.querySelectorAll( '.form-button' )
	const cardClose  = document.querySelector( '.popup-close' )
	setTargetElement( document.querySelector( '#body-lock' ) )

	if( ! popupWrapper ) return

	cardBtn.forEach( button => {
		button.addEventListener( 'click', e => {
			e.preventDefault()

			if( ! popupWrapper.classList.contains( 'opened' ) ) {
				popupWrapper.classList.add( 'opened' )
				disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
			}
		} )
	} )

	cardClose.addEventListener( 'click', () => {
		popupWrapper.classList.remove( 'opened' )
		enableBodyScroll( getTargetElement() )
	} )

	cardWrapper.addEventListener( 'click', e => {
		e.stopPropagation()

		const target = e.target

		if ( target.className && target.classList.contains( 'popup-wrapper' ) ) {
			popupWrapper.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		}
	} )
}