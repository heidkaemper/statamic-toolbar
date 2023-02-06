export default class {
    constructor(debugbar, callback) {
        this.callback = callback;

        new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    this.setStatus(mutation.target);
                }
            });
        }).observe(debugbar, { attributes: true });

        this.setStatus(debugbar);
    }

    setStatus = function(debugbar) {
        if (debugbar.classList.contains('phpdebugbar-closed')) {
            return this.callback('closed');
        }

        return this.callback('minimized');
    }
}
