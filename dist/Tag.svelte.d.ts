/** @typedef {typeof __propDef.props}  TagProps */
/** @typedef {typeof __propDef.events}  TagEvents */
/** @typedef {typeof __propDef.slots}  TagSlots */
export default class Tag extends SvelteComponentTyped<{
    tags: any;
    addKeys: any;
    maxTags: any;
    onlyUnique: any;
    removeKeys: any;
    placeholder: any;
    allowPaste: any;
    allowDrop: any;
    splitWith: any;
    autoComplete: any;
    autoCompleteFilter: boolean;
    autoCompleteKey: any;
    autoCompleteMarkupKey: any;
    name: any;
    id: any;
    allowBlur: any;
    disable: any;
    minChars: any;
    onlyAutocomplete: any;
    labelText: any;
    labelShow: any;
}, {
    tags: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TagProps = typeof __propDef.props;
export type TagEvents = typeof __propDef.events;
export type TagSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tags: any;
        addKeys: any;
        maxTags: any;
        onlyUnique: any;
        removeKeys: any;
        placeholder: any;
        allowPaste: any;
        allowDrop: any;
        splitWith: any;
        autoComplete: any;
        autoCompleteFilter: boolean;
        autoCompleteKey: any;
        autoCompleteMarkupKey: any;
        name: any;
        id: any;
        allowBlur: any;
        disable: any;
        minChars: any;
        onlyAutocomplete: any;
        labelText: any;
        labelShow: any;
    };
    events: {
        tags: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
