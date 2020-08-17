import { Component, Host, h, Prop } from "@stencil/core";

/*   The tooltip component works as a wrapper for the component that need 
  to be have some information displayed.
    It takes 3 Props:
      - text for the inforamtion text
      - shortcut if the component have a shortcut to do its function
      - position for the placement of the tooltip ("left", "top", "right" or "bottom")
      the default position is bottom.
*/

@Component({
  tag: "mr-tooltip",
  styleUrl: "mr-tooltip.scss",
  shadow: false,
})
export class MrTooltip {
  /* --- Ref --- */
  wrapper!: HTMLElement; // Ref of the wrapper that encompass the tooltip and the child component
  content!: HTMLElement; // Ref of the tooltip itself

  /* --- Prop --- */
  @Prop() text: string;
  @Prop() shortcut: string;
  @Prop() position: string = "bottom";

  /* --- Styling of the tooltip after the render --- */
  componentDidRender() {
    // Handle placement according to position
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
        {/* Child component */}
        <slot></slot>

        {/* Tooltip */}
        <p ref={(el) => (this.content = el as HTMLElement)} class="ToolTip">
          {this.text} (<strong>{this.shortcut}</strong>)
        </p>
      </Host>
    );
  }
}
