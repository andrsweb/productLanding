import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'


document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	cardPopup( '.popular-item' )
	cardPopup( '.card' )
} )

const cardPopup = ( selector ) => {
	const cardBtn     = document.querySelectorAll( '.call-popup' )

	cardBtn.forEach( button => {
		button.addEventListener( 'click', e => {
			e.preventDefault()

			const cardWrapper = button.closest( selector ).querySelector( '.item-popup' )
			const cardClose   = cardWrapper.querySelector( '.popup-close' )

			if( cardWrapper && !  cardWrapper.classList.contains( 'opened' ) ) {
				cardWrapper.classList.add( 'opened' )
				disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
			}

			cardWrapper.addEventListener( 'click', e => {
				e.stopPropagation()
		
				const target = e.target
		
				if ( target.className && target.classList.contains( 'item-popup' ) ) {
					cardWrapper.classList.remove( 'opened' )
					enableBodyScroll( getTargetElement() )
				}
			} )

			cardClose.addEventListener( 'click', () => {
				cardWrapper.classList.remove( 'opened' )
				enableBodyScroll( getTargetElement() )
			} )
		} )
	} )
}