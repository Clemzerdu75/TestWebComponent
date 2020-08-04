import { Component, h } from "@stencil/core";

@Component({
  tag: "mr-little-button",
  styleUrl: "mr-little-button.css",
  shadow: true,
})
export class MrLittleButton {
  render() {
    return (
      <div class="Wrapper">
        <slot></slot>
      </div>
    );
  }
}