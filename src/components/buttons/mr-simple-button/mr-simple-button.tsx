import { Component, h } from "@stencil/core";

/* Simple as f**k */

@Component({
  tag: "mr-simple-button",
  styleUrl: "mr-simple-button.css",
  shadow: true,
})
export class MrSimpleButton {
  render() {
    return (
      <div class="Wrapper">
        <slot></slot>
      </div>
    );
  }
}
