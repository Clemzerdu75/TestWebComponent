import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "mr-card",
  styleUrl: "mr-card.scss",
  shadow: false,
})
export class MrCard {
  wrapper!: HTMLElement;

  @Prop() data: string;
  @Prop() anchor: boolean = true;
  @Prop() movable: boolean = false;

  render() {
    return (
      <Host
        ref={(el) => (this.wrapper = el as HTMLElement)}
        class={`MR-card-wrapper-WC ${this.anchor ? "anchor" : ""}`}
        draggable={this.movable ? "true" : "false"}
      >
        <slot></slot>
      </Host>
    );
  }
}
