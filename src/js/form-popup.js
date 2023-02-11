import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'


document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showPopup()
} )

const showPopup = () => {
	const popupWrapper = document.querySelector( '.popup-wrapper' )
	const popupBtn     = document.querySelectorAll( '.form-button' )
	const closeButton  = document.querySelectorAll( '.popup-close' )
	setTargetElement( document.querySelector( '#body-lock' ) )

	if( ! popupWrapper ) return

	popupBtn.forEach( button => {
		button.addEventListener( 'click', e => {
			e.preventDefault()

			if( ! popupWrapper.classList.contains( 'opened' ) ) {
				popupWrapper.classList.add( 'opened' )
				disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
			}
		} )
	} )
	closeButton.forEach( close => {

		close.addEventListener( 'click', () => {
			popupWrapper.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		} )
	} )	

	popupWrapper.addEventListener( 'click', e => {
		e.stopPropagation()

		const target = e.target

		if ( target.className && target.classList.contains( 'popup-wrapper' ) ) {
			popupWrapper.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		}
	} )
}