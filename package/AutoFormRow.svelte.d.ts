import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
import type { FormStructure } from './AutoForm.svelte';
declare const __propDef: {
    props: {
        fields: FormStructure[];
        model: any;
        formData: Writable<FormStructure[]>;
        selfIndex?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AutoFormRowProps = typeof __propDef.props;
export declare type AutoFormRowEvents = typeof __propDef.events;
export declare type AutoFormRowSlots = typeof __propDef.slots;
export default class AutoFormRow extends SvelteComponentTyped<AutoFormRowProps, AutoFormRowEvents, AutoFormRowSlots> {
}
export {};
