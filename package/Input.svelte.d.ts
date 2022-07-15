import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
import type { FormTypes, FormStructure } from './types';
import type { Option } from 'svelte-multiselect';
declare const __propDef: {
    props: {
        type?: FormTypes;
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
        value?: string | boolean | number | Option;
        id?: string;
        valueProperty?: string;
        displayProperty?: string;
        readonly?: boolean;
        options?: any[];
        index?: number | number[];
        formData?: Writable<FormStructure[]>;
        selected?: {
            value: boolean | Option;
            label: boolean | Option;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type InputProps = typeof __propDef.props;
export declare type InputEvents = typeof __propDef.events;
export declare type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
