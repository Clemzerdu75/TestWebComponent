import { Component, h, Prop, EventEmitter, Event, State } from "@stencil/core";

@Component({
  tag: "moben-field",
  styleUrl: "moben-field.css",
  shadow: true,
})
export class MobenInput {
  @State() inputValue: string = "";

  @Prop() type: string = "text";
  @Prop() name: string = "Name";
  @Prop() placeholder: string = "Type your text";

  @Event() inputChange: EventEmitter;

  private inputHandler = (event) => {
    this.inputValue = event.target.value;
    this.inputChange.emit({
      name: this.name,
      value: this.inputValue,
    });
  };
  render() {
    return (
      <input
        type={this.type}
        name={this.name}
        value={this.inputValue}
        placeholder={this.placeholder}
        onChange={this.inputHandler}
      ></input>
    );
  }
}
