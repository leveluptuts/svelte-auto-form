import { SvelteComponentTyped } from "svelte";
export declare type FormTypes = 'number' | 'text' | 'checkbox' | 'select' | 'tag' | 'textarea' | 'password' | 'email' | 'select' | 'search-select' | 'markdown';
interface StringInput {
    name: string;
    readonly?: boolean;
    type?: 'text';
    label?: string;
    fields?: never;
    placeholder?: string;
}
interface StandardInput {
    name: string;
    type: FormTypes;
    readonly?: boolean;
    label?: string;
    fields?: never;
    style?: string;
    placeholder?: string;
}
interface GroupInput {
    name?: never;
    label?: never;
    type: 'group';
    fields: FormInput[];
}
interface SelectInput {
    name: string;
    type: 'select' | 'search-select';
    label?: string;
    options: string[] | object[];
    valueProperty?: string;
    displayProperty?: string;
    fields?: never;
}
export declare type FormInput = StringInput | StandardInput | GroupInput | string | SelectInput;
interface StandardStructure {
    name: string;
    type: FormTypes;
    value: string | boolean | number;
    readonly?: boolean;
    label?: string;
    options?: never;
    valueProperty?: never;
    displayProperty?: never;
    style?: string;
    placeholder?: string;
    fields?: never;
}
interface SelectStructure {
    name: string;
    type: FormTypes;
    value: string | boolean | number;
    readonly?: boolean;
    label?: string;
    options: string[] | object[];
    valueProperty?: string;
    displayProperty?: string;
    fields?: never;
}
interface GroupStructure {
    name?: never;
    label?: never;
    type: 'group';
    fields: FormStructure[];
    options?: never;
    valueProperty?: never;
    displayProperty?: never;
    value?: never;
}
export declare type FormStructure = StandardStructure | SelectStructure | GroupStructure;
export declare type ReturnStructure = {
    [id: string]: string | boolean | number;
};
import type { Readable } from 'svelte/store';
declare const __propDef: {
    props: {
        input?: FormInput[];
        model: any;
        data?: any;
        action?: (localFormData: any) => void;
        submitText?: string;
        formReturn?: Readable<ReturnStructure>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type AutoFormProps = typeof __propDef.props;
export declare type AutoFormEvents = typeof __propDef.events;
export declare type AutoFormSlots = typeof __propDef.slots;
export default class AutoForm extends SvelteComponentTyped<AutoFormProps, AutoFormEvents, AutoFormSlots> {
    get formReturn(): Readable<ReturnStructure>;
}
export {};
