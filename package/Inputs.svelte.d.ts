import { SvelteComponentTyped } from "svelte";
import type { AutoFormSchema, InitialData } from './types';
declare const __propDef: {
    props: {
        fields?: AutoFormSchema;
        meta_active?: boolean;
        initial_data?: InitialData;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type InputsProps = typeof __propDef.props;
export declare type InputsEvents = typeof __propDef.events;
export declare type InputsSlots = typeof __propDef.slots;
export default class Inputs extends SvelteComponentTyped<InputsProps, InputsEvents, InputsSlots> {
}
export {};
