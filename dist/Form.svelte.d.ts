import { SvelteComponentTyped } from "svelte";
import type { AutoFormSchema, InitialData } from './types';
declare const __propDef: {
    props: {
        fields?: AutoFormSchema | undefined;
        meta_active?: boolean | undefined;
        initial_data?: InitialData | undefined;
        after_submit?: (() => void) | undefined;
        before_submit?: (() => void) | undefined;
        submit_text?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FormProps = typeof __propDef.props;
export type FormEvents = typeof __propDef.events;
export type FormSlots = typeof __propDef.slots;
export default class Form extends SvelteComponentTyped<FormProps, FormEvents, FormSlots> {
}
export {};
