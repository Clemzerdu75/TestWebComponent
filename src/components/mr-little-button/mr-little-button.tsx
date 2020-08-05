import { Component, h, Listen } from "@stencil/core";

/*

This component is a simple one. It's just a fully responsive and adaptive button.
There is a lifecycle method and resize event handler to get the proper size of the border

*/

@Component({
  tag: "mr-little-button",
  styleUrl: "mr-little-button.scss",
  shadow: true,
})
export class MrLittleButton {
  wrapper!: HTMLElement;

  /* Resize handler */
  @Listen("resize", { target: "window" })
  handleResize() {
    this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f3f3f3`;
  }

  /* Set the border size when the component is mounted */
  componentDidLoad() {
    this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f3f3f3`;
  }

  render() {
    return (
      <div class="Wrapper" ref={(el) => (this.wrapper = el as HTMLElement)}>
        {/* Slot is for the logo / image you want to put inside the button */}
        <slot></slot>
      </div>
    );
  }
}
