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
	| 'search-select'
	| 'markdown';

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

export type FormInput = StringInput | StandardInput | GroupInput | string | SelectInput;

export interface StandardStructure {
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

export interface SelectStructure {
	name: string;
	type: FormTypes;
	value: string | boolean | number | Option;
	readonly?: boolean;
	label?: string;
	options: string[] | object[];
	valueProperty?: string;
	displayProperty?: string;
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
