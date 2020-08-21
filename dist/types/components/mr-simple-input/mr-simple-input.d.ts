import { EventEmitter } from "../../stencil-public-runtime";
interface Error {
    status: boolean;
    message: string;
}
export declare class MrSimpleInput {
    private textInput?;
    isActive: boolean;
    isDisable: boolean;
    rawValue: string;
    value: string;
    isError: Error;
    inputChange: EventEmitter;
    constructor();
    handleError(newValue: Error): void;
    handleFocus(): void;
    handleBlur(): void;
    handleChange(event: any): void;
    render(): any;
}
export {};
