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
export type InputsProps = typeof __propDef.props;
export type InputsEvents = typeof __propDef.events;
export type InputsSlots = typeof __propDef.slots;
export default class Inputs extends SvelteComponentTyped<InputsProps, InputsEvents, InputsSlots> {
}
export {};
