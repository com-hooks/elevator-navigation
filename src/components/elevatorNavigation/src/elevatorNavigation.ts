import { PropType } from 'vue';
import type ElevatorNavigation from './elevatorNavigation.vue';

export const elevatorNavigationProps = {
    navigatorClassName: {
        type: String as PropType<string>,
        default: '.navigation-group',
    }
}

export type ElevatorNavigationInstance = InstanceType<typeof ElevatorNavigation>; 