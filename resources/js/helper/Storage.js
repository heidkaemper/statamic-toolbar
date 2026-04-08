export default {
    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch {
            return null
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch {
            // Ignore quota errors — the toolbar must not break the page.
        }
    },

    has(key) {
        return localStorage.getItem(key) !== null
    },
}
