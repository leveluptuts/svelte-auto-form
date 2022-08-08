import { SvelteComponentTyped } from "svelte";
import type { Readable } from 'svelte/store';
import type { FormInput, ReturnStructure } from './types';
declare const __propDef: {
    props: {
        input?: FormInput[];
        model: any;
        show_submit?: boolean;
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
