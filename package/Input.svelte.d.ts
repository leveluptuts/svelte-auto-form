/** @typedef {typeof __propDef.props}  InputProps */
/** @typedef {typeof __propDef.events}  InputEvents */
/** @typedef {typeof __propDef.slots}  InputSlots */
export default class Input extends SvelteComponentTyped<{
    type?: string;
    required?: boolean;
    autocomplete?: string;
    displayInline?: boolean;
    forceLowercase?: boolean;
    forceUppercase?: boolean;
    instructions?: string;
    label?: string;
    name?: string;
    onEnter?: any;
    placeholder?: string;
    rest?: {};
    style?: string;
    value?: string;
    id?: string;
    valueProperty?: string;
    displayProperty?: string;
    readonly?: boolean;
    options?: any[];
    index?: number;
    formData?: any;
    selected?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        type?: string;
        required?: boolean;
        autocomplete?: string;
        displayInline?: boolean;
        forceLowercase?: boolean;
        forceUppercase?: boolean;
        instructions?: string;
        label?: string;
        name?: string;
        onEnter?: any;
        placeholder?: string;
        rest?: {};
        style?: string;
        value?: string;
        id?: string;
        valueProperty?: string;
        displayProperty?: string;
        readonly?: boolean;
        options?: any[];
        index?: number;
        formData?: any;
        selected?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
