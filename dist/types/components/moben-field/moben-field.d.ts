import { EventEmitter } from '../../stencil-public-runtime';
export declare class MobenInput {
    inputValue: string;
    type: string;
    name: string;
    placeholder: string;
    inputChange: EventEmitter;
    private inputHandler;
    render(): any;
}
