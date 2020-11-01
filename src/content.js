'use strict'

enable()

function enable() {
  const button = document.getElementById('gbutton')
  if (!!button) { button.disabled = false }
}
