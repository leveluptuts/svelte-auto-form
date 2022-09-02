/** @typedef {typeof __propDef.props}  CustomButtonProps */
/** @typedef {typeof __propDef.events}  CustomButtonEvents */
/** @typedef {typeof __propDef.slots}  CustomButtonSlots */
export default class CustomButton extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CustomButtonProps = typeof __propDef.props;
export type CustomButtonEvents = typeof __propDef.events;
export type CustomButtonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
