import { onAuthStateChange, UserApp } from "../services/firebaseConfig";

class Root extends HTMLElement {
  private user: UserApp | null = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;

switch (state.screen) {
    case Screen.REGISTER_PAGE:
                this.shadowRoot.innerHTML = `

                `;
                break;
  }
}
}



export default Root;
customElements.define ('the-root', Root); 