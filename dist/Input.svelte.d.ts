/** @typedef {typeof __propDef.props}  InputProps */
/** @typedef {typeof __propDef.events}  InputEvents */
/** @typedef {typeof __propDef.slots}  InputSlots */
export default class Input extends SvelteComponentTyped<{
    placeholder?: string | undefined;
    name?: string | undefined;
    id?: string | undefined;
    type?: string | undefined;
    required?: boolean | undefined;
    autocomplete?: string | undefined;
    displayInline?: boolean | undefined;
    instructions?: string | undefined;
    label?: string | undefined;
    rest?: {} | undefined;
    style?: string | undefined;
    value?: string | undefined;
    valueProperty?: string | undefined;
    displayProperty?: string | undefined;
    readonly?: boolean | undefined;
    options?: any[] | undefined;
    selected?: any[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        placeholder?: string | undefined;
        name?: string | undefined;
        id?: string | undefined;
        type?: string | undefined;
        required?: boolean | undefined;
        autocomplete?: string | undefined;
        displayInline?: boolean | undefined;
        instructions?: string | undefined;
        label?: string | undefined;
        rest?: {} | undefined;
        style?: string | undefined;
        value?: string | undefined;
        valueProperty?: string | undefined;
        displayProperty?: string | undefined;
        readonly?: boolean | undefined;
        options?: any[] | undefined;
        selected?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
