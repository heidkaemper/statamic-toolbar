export default class {
    constructor(debugbar, callback) {
        this.callback = callback

        new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    this.setStatus(mutation.target)
                }
            })
        }).observe(debugbar, { attributes: true })

        this.setStatus(debugbar)
    }

    setStatus(debugbar) {
        if (debugbar.classList.contains('phpdebugbar-closed')) {
            const restoreButton = debugbar.querySelector(':scope > .phpdebugbar-restore-btn')

            return this.callback({
                width: restoreButton?.offsetWidth > 0 ? restoreButton.offsetWidth : null,
                height: restoreButton?.offsetHeight > 0 ? restoreButton.offsetHeight : null,
                status: 'closed'
            })
        }

        const restoreButton = debugbar.querySelector('.phpdebugbar-header .phpdebugbar-restore-btn')

        return this.callback({
            width: restoreButton?.offsetWidth > 0 ? restoreButton.offsetWidth : null,
            height: restoreButton?.offsetHeight > 0 ? restoreButton.offsetHeight : null,
            status: 'minimized'
        })
    }
}
