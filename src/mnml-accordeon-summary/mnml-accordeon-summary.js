import { Base, html, css } from '../mnml-base/mnml-base.js';

export class MnmlAccordeonSummary extends Base {
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
      <summary class="container">
        <slot></slot>
      </summary>
    `;
  }

  firstUpdated() {
    this.setAttribute('slot', 'summary');
  }
}

customElements.define('mnml-accordeon-summary', MnmlAccordeonSummary);
