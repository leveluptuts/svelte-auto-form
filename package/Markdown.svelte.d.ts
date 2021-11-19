import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        text?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type MarkdownProps = typeof __propDef.props;
export declare type MarkdownEvents = typeof __propDef.events;
export declare type MarkdownSlots = typeof __propDef.slots;
export default class Markdown extends SvelteComponentTyped<MarkdownProps, MarkdownEvents, MarkdownSlots> {
}
export {};
