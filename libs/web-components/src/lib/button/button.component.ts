export class ButtonComponent extends HTMLElement {

  button: HTMLButtonElement;

  static get observedAttributes() {
    return ['variant', 'label'];
  }

  get variant() {
    return this.getAttribute('variant');
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }

  get label() {
    return this.getAttribute('label');
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.button = document.createElement('button');
    this.button.classList.add('btn');
    this.appendChild(this.button);
  }

  attributeChangedCallback(name, previousValue, value) {
    if (name === 'variant') {
      this.button.classList.remove('btn-primary');
      this.button.classList.remove('btn-secondary');
      this.button.classList.add(`btn-${value}`);
      return;
    }

    if (name === 'label') {
      this.button.innerText = value;
      return;
    }
  }
}

if (!customElements.get('si-button')) {
  customElements.define('si-button', ButtonComponent);

  Array.from(document.querySelectorAll('si-button'))
    .map(element => customElements.upgrade(element));
}
