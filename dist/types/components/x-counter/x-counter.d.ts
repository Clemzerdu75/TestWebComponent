import { EventEmitter } from "../../stencil-public-runtime";
export declare class XCounter {
    valueElement: HTMLElement;
    incrementButton: HTMLElement;
    decrementButton: HTMLElement;
    _value: number;
    valueChange: EventEmitter;
    set value(value: number);
    get value(): number;
    static get observedAttributes(): string[];
    componentDidLoad(): void;
    render(): any;
}
