import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
import type { FormTypes, FormStructure } from './AutoForm.svelte';
declare const __propDef: {
    props: {
        type: FormTypes;
        required?: boolean;
        autocomplete?: string;
        displayInline?: boolean;
        forceLowercase?: boolean;
        forceUppercase?: boolean;
        instructions?: string;
        label?: string;
        name?: string;
        onEnter?: () => any;
        placeholder?: string;
        rest?: {};
        style?: string;
        value?: string | boolean | number;
        id?: string;
        valueProperty?: string;
        displayProperty?: string;
        readonly?: boolean;
        options?: any[];
        index: number | number[];
        depth?: number;
        formData: Writable<FormStructure[]>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FieldProps = typeof __propDef.props;
export declare type FieldEvents = typeof __propDef.events;
export declare type FieldSlots = typeof __propDef.slots;
export default class Field extends SvelteComponentTyped<FieldProps, FieldEvents, FieldSlots> {
}
export {};
