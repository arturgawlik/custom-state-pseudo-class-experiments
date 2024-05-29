export default class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    this._states = this._internals.states;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <span>
            Hello from my custom element!
        </span>
    `;
  }

  togleStateOne() {
    if (this._states.has("stateOne")) {
      this._states.delete("stateOne");
    } else {
      this._states.add("stateOne");
    }
  }

  togleStateTwo() {
    if (this._states.has("stateTwo")) {
      this._states.delete("stateTwo");
    } else {
      this._states.add("stateTwo");
    }
  }

  togleStateThree() {
    if (this._states.has("stateThree")) {
      this._states.delete("stateThree");
    } else {
      this._states.add("stateThree");
    }
  }
}
