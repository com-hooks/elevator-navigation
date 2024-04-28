
const obServerMap = new WeakMap<object, IntersectionObserver>();

/**
 * 
 * @param target 
 * @returns 
 */
export function createIntersectionObserver(target: Element, callback: (enter: IntersectionObserverEntry) => void, options: IntersectionObserverInit = {}) {
    if (obServerMap.has(target)) {
        const oldObjserver = obServerMap.get(target);
        oldObjserver?.unobserve(target);
        oldObjserver?.disconnect();
    }
    const observer = new IntersectionObserver((enters) => {
        enters.forEach((value) => {
            if (value.isIntersecting) {
                // 进入视口
                callback(value);
            }
        });
    }, options);

    observer.observe(target);
    obServerMap.set(target, observer);
    return {
        observer,
    };
}