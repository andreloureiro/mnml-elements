import { Base, html, css, classMap } from '../mnml-base/mnml-base.js';

export class MnmlAccordeon extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        .container {
        }
        .summary {
          display: flex;
          justify-content: space-between;
        }
        .summary--clickable {
          cursor: pointer;
        }
      `
    ];
  };

  static get properties() {
    return {
      open: {
        type: Boolean
      }
    };
  };

  constructor() {
    super();

    this.open = false;
  }

  renderDetails() {
    return html`
      <slot name="details"></slot>
    `;
  }

  render() {
    const summaryClasses = {
      summary: true,
      'summary--clickable': Boolean(this.onChange)
    };
    
    return html`
      <div class="container" open="${this.open}">
        <div class="${classMap(summaryClasses)}" @click=${this.onChange}>
          <slot name="summary"></slot>
        </div>
        ${this.open ? this.renderDetails() : html`<div></div>`}
      </div>
    `;
  }
}

customElements.define('mnml-accordeon', MnmlAccordeon);
