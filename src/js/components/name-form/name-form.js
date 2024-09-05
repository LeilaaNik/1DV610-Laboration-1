/**
 * The name-form web component.
 *
 * @version 1.1.0
 */

const template = document.createElement('template')
template.innerHTML = `
  <style>
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    input {
      margin: 10px;
      padding: 10px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      font-family: Georgia, serif;
    }
    button {
      margin: 10px;
      padding: 10px 20px; 
      background-color: lightpurple; 
      color: rgb(106, 2, 106); 
      border: none; 
      border-radius: 5px; 
      font-family: Georgia, serif;
      font-size: 16px; 
      font-weight: bold; 
      cursor: pointer; 
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
      transition: background-color 0.3s ease, transform 0.3s ease; 
    }
    button:hover {
      background-color: lightpink;
      transform: translateY(-2px);
    }
  </style>
  <form id="nameForm">
    <input id="nameInput" type="text" required>
    <button type="submit">Enter</button>
  </form>
`

customElements.define('name-form',
  /**
   * The nickname-form web component class.
   */
  class extends HTMLElement {
    #formElement
    #inputElement

    /**
     * Creates a new instance of the nickname-form web component.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
      this.#formElement = this.shadowRoot.querySelector('#nameForm')
      this.#inputElement = this.shadowRoot.querySelector('#nameInput')
    }

    /**
     * Adds the event listener when the component is connected to the DOM.
     */
    connectedCallback () {
      this.#formElement.addEventListener('submit', this.#handleSubmit)
    }

    /**
     * Removes the event listener when the component is disconnected from the DOM.
     */
    disconnectedCallback () {
      this.#formElement.removeEventListener('submit', this.#handleSubmit)
    }

    /**
     * Handles the form submission event.
     *
     * @param {Event} event - The form submission event.
     */
    #handleSubmit = event => {
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('name-submitted', {
        detail: { name: this.#inputElement.value }
      }))
    }
  }
)
