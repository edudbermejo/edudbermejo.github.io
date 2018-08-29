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
    fetch('./cv.json')
      .then(response => response.json().then( data => {debugger;this.cvData = data;}));
  }

  _render() {
    return html`
      Web Components are cool!
    `;
  }
}

customElements.define('cv-component', cvComponent);
