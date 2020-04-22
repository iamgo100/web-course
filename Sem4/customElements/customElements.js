class Counter extends HTMLElement { 
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const content = document.importNode(document.querySelector('#tpl').content, true);
        this.val = this.querySelector('[slot=val]').textContent;
        shadow.appendChild(content);
        this.addEventListener('click', () => {
            this.val++;
            this.querySelector('[slot=val]').textContent = this.val;
        })
    }
}
customElements.define('x-cntr', Counter);