import {css, html, LitElement} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';

class Button extends LitElement {
    static get styles() {
        return css`
            .button {
                display: inline-flex;
                padding: 0.5rem 1rem;
                justify-content: center;
                text-align: center;
                border-radius: 0.25rem;
                font-size: 1rem;
                line-height: 1.5;
                outline: none;
                border: 1px solid var(--border-color);
                background-color: rgb(250, 250, 250);
                color: var(--text-color);
            }
            
            .is-primary {
                background-color: var(--primary-color);
                color: white;
                border: none;
            }
        `;
    }

    static get properties() {
        return {
            disabled: {type: Boolean},
            primary: {type: Boolean},
            type: {type: String},
        };
    }

    render() {
        let classes = {button: true};
        if (this.primary) {
            classes['is-primary'] = true;
        }

        return html`
            <button class="${classMap(classes)}" type="${this.type}" ?disabled="${this.disabled}" @click="${this.preventDefault}">
                <slot></slot>
            </button>
        `;
    }

    preventDefault(event) {
        // otherwise the event fires twice for outside components...
        event.preventDefault();
    }
}

customElements.define('ui-button', Button);
