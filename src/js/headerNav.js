/**
 * Toggling header nav views: Logged in & Logged out
 */

import { toggleDnFlex } from './helpers'

const
  viewLoggedIn = document.querySelector('#loggedIn'),
  viewLoggedOut = document.querySelector('#loggedOut'),
  logInBttn = viewLoggedOut.querySelector('.js-toggle'),
  logOutBttn = viewLoggedIn.querySelector('.js-toggle');

const onClick = () => {
  [viewLoggedIn, viewLoggedOut].forEach(toggleDnFlex)
}

export default {
  type: 'click',
  handle: onClick,
  triggers: [logInBttn, logOutBttn]
}
