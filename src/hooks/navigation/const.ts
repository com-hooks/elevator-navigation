
export const defaultScrollIntoViewOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'start',
}

export interface ObserverInit extends IntersectionObserverInit {

}
export const defaultobserverOption: ObserverInit = {
    threshold: [0.25],
    rootMargin: '0px 0px 0px 0px',
}

export const defaultNavigatorOptions = {
    attrName: 'navigator-name',
    className: 'navigator-item',
    activedClassName: 'actived',
}

export type NavigatorOptions = typeof defaultNavigatorOptions;