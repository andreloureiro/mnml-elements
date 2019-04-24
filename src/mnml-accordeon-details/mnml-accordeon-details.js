import { Base, html, css } from '../mnml-base/mnml-base.js';

export class MnmlAccordeonDetails extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: contents;
        }
        .container {
        }
      `
    ];
  };

  render() {
    return html`
      <slot></slot>
    `;
  }

  firstUpdated() {
    this.setAttribute('slot', 'details');
  }
}

customElements.define('mnml-accordeon-details', MnmlAccordeonDetails);
