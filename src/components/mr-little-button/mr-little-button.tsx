import { Component, h } from "@stencil/core";

// Simple as f***
@Component({
  tag: "mr-little-button",
  styleUrl: "mr-little-button.scss",
  shadow: true,
})
export class MrLittleButton {
  wrapper!: HTMLElement;
  componentDidLoad() {
    this.wrapper.style.border = ` solid ${this.wrapper.offsetWidth * 0.1}px #f3f3f3`;
    setTimeout(() => {
      this.wrapper.style.transition = " 0.2s ease-in-out";
    }, 50);
  }

  render() {
    return (
      <div class="Wrapper" ref={(el) => (this.wrapper = el as HTMLInputElement)}>
        <slot></slot>
      </div>
    );
  }
}
