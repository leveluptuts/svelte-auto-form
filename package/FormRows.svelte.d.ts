/** @typedef {typeof __propDef.props}  FormRowsProps */
/** @typedef {typeof __propDef.events}  FormRowsEvents */
/** @typedef {typeof __propDef.slots}  FormRowsSlots */
export default class FormRows extends SvelteComponentTyped<{
    fields: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FormRowsProps = typeof __propDef.props;
export type FormRowsEvents = typeof __propDef.events;
export type FormRowsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        fields: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
