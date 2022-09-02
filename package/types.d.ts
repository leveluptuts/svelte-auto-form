import type { Option } from 'svelte-multiselect';
export declare type FormTypes = 'number' | 'text' | 'checkbox' | 'select' | 'tag' | 'textarea' | 'password' | 'email' | 'select' | 'search-select';
export interface StringInput {
    name: string;
    readonly?: boolean;
    type?: 'text';
    label?: string;
    fields?: never;
    placeholder?: string;
}
export interface StandardInput {
    name: string;
    type: FormTypes;
    readonly?: boolean;
    label?: string;
    fields?: never;
    style?: string;
    placeholder?: string;
}
export interface GroupInput {
    name?: never;
    label?: never;
    type: 'group';
    fields: FormInput[];
}
export interface SelectInput {
    name: string;
    type: 'select' | 'search-select';
    label?: string;
    options: string[] | object[];
    valueProperty?: string;
    displayProperty?: string;
    fields?: never;
}
export declare type FormInput = StringInput | StandardInput | GroupInput | string | SelectInput;
export declare type AutoFormSchema = FormInput[];
export interface StandardStructure {
    name: string;
    type: FormTypes;
    value: string | boolean | number;
    readonly?: boolean;
    required?: boolean;
    label?: string;
    options?: never;
    valueProperty?: never;
    displayProperty?: never;
    style?: string;
    placeholder?: string;
    fields?: never;
}
export interface SelectStructure {
    name: string;
    placeholder?: never;
    type: FormTypes;
    value: string | boolean | number | Option;
    readonly?: boolean;
    required?: boolean;
    label?: string;
    options: string[] | object[];
    valueProperty?: string;
    displayProperty?: string;
    style?: string;
    fields?: never;
}
export interface GroupStructure {
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
export interface InitialData {
    [id: string]: any;
}
