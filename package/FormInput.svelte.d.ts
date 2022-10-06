/** @typedef {typeof __propDef.props}  FormInputProps */
/** @typedef {typeof __propDef.events}  FormInputEvents */
/** @typedef {typeof __propDef.slots}  FormInputSlots */
export default class FormInput extends SvelteComponentTyped<{
    type?: string;
    required?: boolean;
    autocomplete?: string;
    displayInline?: boolean;
    instructions?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    rest?: {};
    style?: string;
    value?: string;
    id?: string;
    valueProperty?: string;
    displayProperty?: string;
    readonly?: boolean;
    options?: any[];
    selected?: any[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FormInputProps = typeof __propDef.props;
export type FormInputEvents = typeof __propDef.events;
export type FormInputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        type?: string;
        required?: boolean;
        autocomplete?: string;
        displayInline?: boolean;
        instructions?: string;
        label?: string;
        name?: string;
        placeholder?: string;
        rest?: {};
        style?: string;
        value?: string;
        id?: string;
        valueProperty?: string;
        displayProperty?: string;
        readonly?: boolean;
        options?: any[];
        selected?: any[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
