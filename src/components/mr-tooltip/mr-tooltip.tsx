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
  @Prop() position: string = "bottom";

  componentDidRender() {
    const size =
      this.wrapper.offsetWidth * 0.01 < 0.8
        ? 0.8 // min size
        : this.wrapper.offsetWidth * 0.01 > 1
        ? 1 // max size
        : this.wrapper.offsetWidth * 0.01;

    this.content.style.fontSize = `${size}em`;

    console.log("c", this.content.offsetWidth);
    console.log("w", this.wrapper.offsetWidth);
    switch (this.position) {
      case "bottom":
        this.content.style.bottom = `-${
          (this.content.offsetHeight / this.wrapper.offsetHeight) * this.wrapper.offsetHeight + 30
        }px`;
        break;
      case "left":
        this.content.style.left = `-${
          (this.content.offsetWidth / this.wrapper.offsetWidth) * this.wrapper.offsetWidth + 20
        }px`;
        break;
      case "top":
        this.content.style.top = `-${
          (this.content.offsetHeight / this.wrapper.offsetHeight) * this.wrapper.offsetHeight + 35
        }px`;
        break;
      case "right":
        this.content.style.right = `-${
          (this.content.offsetWidth / this.wrapper.offsetWidth) * this.wrapper.offsetWidth + 20
        }px`;
        break;
    }
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
