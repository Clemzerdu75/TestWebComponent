import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "mr-tooltip",
  styleUrl: "mr-tooltip.scss",
  shadow: false,
})
export class MrTooltip {
  wrapper!: HTMLElement;
  content!: HTMLElement;

  @Prop() text: string;
  @Prop() shortcut: string;

  componentDidRender() {
    const size =
      this.wrapper.offsetWidth * 0.01 < 0.8
        ? 0.8 // min size
        : this.wrapper.offsetWidth * 0.01 > 1
        ? 1 // max size
        : this.wrapper.offsetWidth * 0.01;

    this.content.style.fontSize = `${size}em`;
  }

  render() {
    return (
      <Host ref={(el) => (this.wrapper = el as HTMLElement)} class="MrToolTipWrapperWC">
        <slot></slot>
        <p ref={(el) => (this.content = el as HTMLElement)} class="ToolTip">
          {this.text} <strong>({this.shortcut})</strong>
        </p>
      </Host>
    );
  }
}
