import type { Option } from 'svelte-multiselect';

export type FormTypes =
	| 'number'
	| 'text'
	| 'checkbox'
	| 'select'
	| 'tag'
	| 'textarea'
	| 'password'
	| 'email'
	| 'select'
	| 'search-select';

interface BaseInput {
	name: string;
	readonly?: boolean;
	meta?: boolean;
	label?: string;
	style?: string;
	required?: boolean;
}

export interface StandardInput extends BaseInput {
	type: FormTypes;
	placeholder?: string;
}
export interface StringInput extends BaseInput {
	type?: 'text';
	placeholder?: string;
}

export interface GroupInput extends BaseInput {
	type: 'group';
	fields: FormInput[];
}

export interface SelectInput extends BaseInput {
	type: 'select' | 'search-select';
	options: string[] | object[];
	valueProperty?: string;
	displayProperty?: string;
}

export type FormInput = StringInput | StandardInput | GroupInput | string | SelectInput;
export type AutoFormSchema = Array<StringInput | StandardInput | GroupInput | string | SelectInput>;

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

export type FormStructure = StandardStructure | SelectStructure | GroupStructure;

export type ReturnStructure = {
	[id: string]: string | boolean | number;
};

export interface InitialData {
	[id: string]: any;
}
