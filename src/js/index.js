/**
 * The main script file of the application.
 *
 * @version 1.0.0
 */

import './components/name-form/index.js'

/**
 * Shows a greeting message with the name entered in the input field.
 *
 * @param {string} name - The name entered in the input field.
 */
function showGreeting (name) {
  const greetingMessage = `Dear ${name}\nHere is the quote of the day for you!`
  document.getElementById('greetingMessage').innerText = greetingMessage
  showRandomImage()

  document.getElementById('nameFormContainer').style.display = 'none'

  document.getElementById('showAnotherPictureButton').style.display = 'block'
  document.getElementById('goBackButton').style.display = 'block'
}

/**
 * Shows a random image from the assets folder.
 */
function showRandomImage () {
  const images = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg',
    '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg',
    '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'
  ]
  const randomImage = images[Math.floor(Math.random() * images.length)]
  const imgElement = document.createElement('img')
  imgElement.src = `../assets/${randomImage}`
  imgElement.alt = 'Random Image'
  document.getElementById('imageContainer').innerHTML = ''
  document.getElementById('imageContainer').appendChild(imgElement)
}

/**
 * Resets the form to enter the name.
 */
function resetForm () {
  document.getElementById('nameFormContainer').style.display = 'block'
  document.getElementById('greetingMessage').innerText = ''
  document.getElementById('imageContainer').innerHTML = ''
  document.getElementById('showAnotherPictureButton').style.display = 'none'
  document.getElementById('goBackButton').style.display = 'none'
}

document.querySelector('name-form').addEventListener('name-submitted', (event) => {
  showGreeting(event.detail.name)
})

document.getElementById('showAnotherPictureButton').addEventListener('click', showRandomImage)
document.getElementById('goBackButton').addEventListener('click', resetForm)
