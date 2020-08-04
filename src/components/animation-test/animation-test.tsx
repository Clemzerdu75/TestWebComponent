import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "animation-test",
  styleUrl: "animation-test.css",
  shadow: false,
})
export class AnimationTest {
  @Element() el: HTMLElement;
  io: IntersectionObserver;

  render() {
    return <div class="nice_anim"></div>;
  }
}
