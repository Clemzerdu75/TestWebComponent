import { Component, h, Listen, Prop, Host } from "@stencil/core";

/*

This component is a simple one. It's just a fully responsive and adaptive button.
There is a lifecycle method and resize event handler to get the proper size of the border

*/

@Component({
  tag: "mr-little-button",
  styleUrl: "mr-little-button.scss",
  shadow: false,
})
export class MrLittleButton {
  wrapper!: HTMLElement;

  @Prop() anchor: boolean = false;

  /* Resize handler */
  @Listen("resize", { target: "window" })
  handleResize() {
    this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f5f5f5`;
  }

  /* Set the border size when the component is mounted */
  componentDidLoad() {
    this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f5f5f5`;
  }

  render() {
    return (
      <Host
        class={`LittleButtonWrapperWC ${this.anchor ? "anchor" : ""}`}
        ref={(el) => (this.wrapper = el as HTMLElement)}
      >
        {/* Slot is for the logo / image you want to put inside the button */}
        <slot></slot>
      </Host>
    );
  }
}
