export class InputKnob extends HTMLElement {
  static observedAttributes = ["value"];

  value = 0;

  constructor() {
    super();
  }

  render() {
    this.innerHTML = `<data value="${this.value}">${this.value}</data>`;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed to`, newValue);
  }
}
