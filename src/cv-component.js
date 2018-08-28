import {LitElement, html} from '@polymer/lit-element';

class cvComponent extends LitElement {

  static get properties() {
    return {
      cvData: {type: Object}
    };
  }

  static get styles() {
    return html`
      <style>
        body {
          background-color: green;
        }
      </style>
    `;
  }

  constructor() {
    super();
    this.cvData = {}; // TODO implement ajax call to retrieve the json
  }

  _render() {
    return html`
      Web Components are cool!
    `;
  }
}

customElements.define('cv-component', cvComponent);
