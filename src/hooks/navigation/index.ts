import { DefineContext } from '../context';
import { effectScope, shallowRef, ref, onBeforeUnmount, watch, computed, ComputedRef } from 'vue';
import { defaultScrollIntoViewOptions, ObserverInit, defaultobserverOption, defaultNavigatorOptions, NavigatorOptions } from './const';
import { createIntersectionObserver } from '../observer';
// @ts-ignore
import { debounce } from 'lodash-es';

/**
 * 
 * @param workContextRef 
 * @param scrollIntoViewOptions 
 * @param ObserverInit 
 * @returns 
 */
export function defineNavigation(
    workContextRef: DefineContext['navigatorElementList'],
    scrollIntoViewOptions?: ScrollIntoViewOptions,
    intersectionObserverInitOptions?: ObserverInit,
    navigatorOptions?: NavigatorOptions,
) {
    const _scrollIntoViewOptions = Object.assign(defaultScrollIntoViewOptions, scrollIntoViewOptions ?? {});
    const _intersectionObserverInitOptions = Object.assign(defaultobserverOption, intersectionObserverInitOptions ?? {});
    const _navigatorOptions = Object.assign(defaultNavigatorOptions, navigatorOptions ?? {});
    const effectScopeInstance = effectScope();
    const navigatorList = shallowRef<{ text: string; bind: ComputedRef; }[]>([]);
    const activedIndex = ref(0);
    const updateIndex = ((index: number) => {
        activedIndex.value = index;
    });
    const { className, activedClassName, attrName } = _navigatorOptions;
    const bindNavigator = debounce(() => {
        navigatorList.value = Array.from(workContextRef.value).map((el, index) => {
            createIntersectionObserver(el, debounce(() => {
                updateIndex(index);
            }), _intersectionObserverInitOptions);
            return {
                text: el.getAttribute(attrName) ?? el.nodeName,
                bind: computed(() => {
                    return {
                        class: [
                            className,
                            {
                                [activedClassName]: activedIndex.value === index,
                            }
                        ],
                        onClick() {
                            el.scrollIntoView(_scrollIntoViewOptions);
                            Promise.resolve().then(() => {
                                updateIndex(index);
                            })
                        }
                    }
                })
            };
        });
    }, 100);

    const stopWatch = watch(() => workContextRef.value, bindNavigator, {
        deep: true,
    });
    onBeforeUnmount(stopWatch);
    return {
        navigatorList,
        effectScopeInstance,
    }
}

export type DefineNavigation = ReturnType<typeof defineNavigation>;