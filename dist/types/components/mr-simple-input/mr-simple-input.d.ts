import { EventEmitter } from "../../stencil-public-runtime";
interface Error {
    status: boolean;
    message: string;
    priority: boolean;
}
export declare class MrSimpleInput {
    private textInput?;
    private labelInput?;
    isActive: boolean;
    isDisable: boolean;
    rawValue: string;
    value: string;
    isError: Error;
    name: string;
    placeholder: string;
    type: string;
    inputChange: EventEmitter;
    constructor();
    handleError(newValue: Error): void;
    handleFocus(): void;
    handleBlur(): void;
    handleChange(event: any): void;
    render(): any;
}
export {};
