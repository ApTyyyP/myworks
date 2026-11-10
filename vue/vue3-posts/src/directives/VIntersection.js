const observers = new WeakMap();

export default {
    mounted(el, binding) {
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (el.isConnected && entries[0].isIntersecting) {
                binding.value()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observers.set(el, observer);
        observer.observe(el);
    },
    beforeUnmount(el) {
        observers.get(el)?.disconnect();
        observers.delete(el);
    },
    name: 'intersection'
}