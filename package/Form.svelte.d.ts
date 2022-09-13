import { SvelteComponentTyped } from "svelte";
import type { AutoFormSchema, FormStructure, InitialData } from './types';
declare const __propDef: {
    props: {
        fields: FormStructure[];
        method?: 'GET' | 'POST';
        action?: string;
        enhance: any;
        schema?: AutoFormSchema;
        CustomButton?: any;
        submitText?: string;
        initial_data?: InitialData;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type FormProps = typeof __propDef.props;
export declare type FormEvents = typeof __propDef.events;
export declare type FormSlots = typeof __propDef.slots;
export default class Form extends SvelteComponentTyped<FormProps, FormEvents, FormSlots> {
}
export {};
