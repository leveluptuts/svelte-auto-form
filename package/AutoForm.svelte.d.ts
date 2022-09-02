import { SvelteComponentTyped } from "svelte";
import type { Readable } from 'svelte/store';
import type { ReturnStructure, InitialData, AutoFormSchema } from './types';
declare const __propDef: {
    props: {
        schema?: AutoFormSchema;
        initial_data?: InitialData;
        show_submit?: boolean;
        data?: any;
        CustomButton?: any;
        submitText?: string;
        formReturn?: Readable<ReturnStructure>;
    };
    events: {
        submit: CustomEvent<any>;
    } & {
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
