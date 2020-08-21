import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "mr-card",
  styleUrl: "mr-card.scss",
  shadow: false,
})
export class MrCard {

  @Prop() data: string;
  @Prop() anchor: boolean = true;

  render() {
    return (
      <Host
        class={`MR-card-wrapper-WC ${this.anchor ? "anchor" : ""}`}
      >
        <slot></slot>
      </Host>
    );
  }
}
