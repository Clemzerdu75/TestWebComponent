import { Component, h } from "@stencil/core";

@Component({
  tag: "mr-simple-input",
  styleUrl: "mr-simple-input.scss",
  shadow: false,
})
export class MrSimpleInput {
  render() {
    return <input placeholder="First name" name="firstName"></input>;
  }
}
