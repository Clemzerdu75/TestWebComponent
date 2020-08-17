/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface MrCard {
        "anchor": boolean;
        "data": string;
        "movable": boolean;
    }
    interface MrLittleButton {
        "anchor": boolean;
    }
    interface MrProfilButton {
    }
    interface MrSimpleInput {
    }
    interface MrTooltip {
        "position": string;
        "shortcut": string;
        "text": string;
    }
    interface XCounter {
    }
}
declare global {
    interface HTMLMrCardElement extends Components.MrCard, HTMLStencilElement {
    }
    var HTMLMrCardElement: {
        prototype: HTMLMrCardElement;
        new (): HTMLMrCardElement;
    };
    interface HTMLMrLittleButtonElement extends Components.MrLittleButton, HTMLStencilElement {
    }
    var HTMLMrLittleButtonElement: {
        prototype: HTMLMrLittleButtonElement;
        new (): HTMLMrLittleButtonElement;
    };
    interface HTMLMrProfilButtonElement extends Components.MrProfilButton, HTMLStencilElement {
    }
    var HTMLMrProfilButtonElement: {
        prototype: HTMLMrProfilButtonElement;
        new (): HTMLMrProfilButtonElement;
    };
    interface HTMLMrSimpleInputElement extends Components.MrSimpleInput, HTMLStencilElement {
    }
    var HTMLMrSimpleInputElement: {
        prototype: HTMLMrSimpleInputElement;
        new (): HTMLMrSimpleInputElement;
    };
    interface HTMLMrTooltipElement extends Components.MrTooltip, HTMLStencilElement {
    }
    var HTMLMrTooltipElement: {
        prototype: HTMLMrTooltipElement;
        new (): HTMLMrTooltipElement;
    };
    interface HTMLXCounterElement extends Components.XCounter, HTMLStencilElement {
    }
    var HTMLXCounterElement: {
        prototype: HTMLXCounterElement;
        new (): HTMLXCounterElement;
    };
    interface HTMLElementTagNameMap {
        "mr-card": HTMLMrCardElement;
        "mr-little-button": HTMLMrLittleButtonElement;
        "mr-profil-button": HTMLMrProfilButtonElement;
        "mr-simple-input": HTMLMrSimpleInputElement;
        "mr-tooltip": HTMLMrTooltipElement;
        "x-counter": HTMLXCounterElement;
    }
}
declare namespace LocalJSX {
    interface MrCard {
        "anchor"?: boolean;
        "data"?: string;
        "movable"?: boolean;
    }
    interface MrLittleButton {
        "anchor"?: boolean;
    }
    interface MrProfilButton {
        "onButtonToggle"?: (event: CustomEvent<any>) => void;
    }
    interface MrSimpleInput {
    }
    interface MrTooltip {
        "position"?: string;
        "shortcut"?: string;
        "text"?: string;
    }
    interface XCounter {
        "onValueChange"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "mr-card": MrCard;
        "mr-little-button": MrLittleButton;
        "mr-profil-button": MrProfilButton;
        "mr-simple-input": MrSimpleInput;
        "mr-tooltip": MrTooltip;
        "x-counter": XCounter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mr-card": LocalJSX.MrCard & JSXBase.HTMLAttributes<HTMLMrCardElement>;
            "mr-little-button": LocalJSX.MrLittleButton & JSXBase.HTMLAttributes<HTMLMrLittleButtonElement>;
            "mr-profil-button": LocalJSX.MrProfilButton & JSXBase.HTMLAttributes<HTMLMrProfilButtonElement>;
            "mr-simple-input": LocalJSX.MrSimpleInput & JSXBase.HTMLAttributes<HTMLMrSimpleInputElement>;
            "mr-tooltip": LocalJSX.MrTooltip & JSXBase.HTMLAttributes<HTMLMrTooltipElement>;
            "x-counter": LocalJSX.XCounter & JSXBase.HTMLAttributes<HTMLXCounterElement>;
        }
    }
}
