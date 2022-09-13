import { SvelteComponentTyped } from "svelte";
import type { FormStructure } from './types';
declare const __propDef: {
    props: {
        fields: FormStructure[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FormRowsProps = typeof __propDef.props;
export declare type FormRowsEvents = typeof __propDef.events;
export declare type FormRowsSlots = typeof __propDef.slots;
export default class FormRows extends SvelteComponentTyped<FormRowsProps, FormRowsEvents, FormRowsSlots> {
}
export {};
