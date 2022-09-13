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
        value?: any;
        id?: string;
        valueProperty?: string;
        displayProperty?: string;
        readonly?: boolean;
        options?: any[];
        selected?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FormInputProps = typeof __propDef.props;
export declare type FormInputEvents = typeof __propDef.events;
export declare type FormInputSlots = typeof __propDef.slots;
export default class FormInput extends SvelteComponentTyped<FormInputProps, FormInputEvents, FormInputSlots> {
}
export {};
