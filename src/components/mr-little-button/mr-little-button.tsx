import { Component, h, Listen } from "@stencil/core";

// Simple as f***
@Component({
  tag: "mr-little-button",
  styleUrl: "mr-little-button.scss",
  shadow: true,
})
export class MrLittleButton {
  wrapper!: HTMLElement;

  @Listen("resize", { target: "window" })
  handleResize() {
    this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f3f3f3`;
  }

  componentDidLoad() {
    this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f3f3f3`;
  }

  render() {
    return (
      <div class="Wrapper" ref={(el) => (this.wrapper = el as HTMLElement)}>
        <slot></slot>
      </div>
    );
  }
}
