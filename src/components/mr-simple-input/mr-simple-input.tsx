import { Component, h, Prop, State, Event, EventEmitter, Watch, Host } from "@stencil/core";

/* Mode de fonctionnement =>
  - recoit isError si il est invalide, devient rouge
  - quand il est actif => verifcation en temps réel,
petit popup qui prévient que c'est pas bon
  - quand on sort et il est valide modification de l'interface
  - disable.
  La plupart des tcheck se font quand 'onblur()'
*/

interface Error {
  status: boolean,
  message: string,
  priority: boolean,
}
@Component({
  tag: "mr-simple-input",
  styleUrl: "mr-simple-input.scss",
  shadow: false,
})
export class MrSimpleInput {
  private textInput?: HTMLInputElement;
  private labelInput?: HTMLElement;

  @State() isActive: boolean = false
  @State() isDisable: boolean = false
  @State() rawValue: string
  @State() value: string

  @Prop() isError: Error = { status: false, message: "", priority: false }
  @Prop() name: string
  @Prop() placeholder: string
  @Prop() type: string = "text"

  @Event() inputChange: EventEmitter

  constructor() {
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  @Watch('isError')
  handleError(newValue: Error) {
    if (newValue.status) {
      if (this.isActive) this.handleFocus()
      else this.handleBlur()
    }
    else {

    }
  }

  handleFocus() {
    this.isActive = true;
    if (this.textInput.value.length && !this.isError.status) {
      this.labelInput.style.color = "#42c19a";
    }
    else {
      this.labelInput.style.color = "rgba(0,0,0,0.8)";
    }
  }

  handleBlur() {
    this.isActive = false;
    if (this.textInput.value.length && !this.isError.status) {
      this.labelInput.style.color = "#42c19a";
    }
    else if (this.textInput.value.length && this.isError.status) {
      this.isError.priority = true;
    } else {
      this.labelInput.style.color = "rgba(0,0,0,0.8)";
    }
  }

  handleChange(event) {
    this.value = event.target.value;
    this.inputChange.emit({ name: event.target.name, value: this.value })
  }

  render() {
    return (
      <Host class="MR-input-global-wrapper-WC">
        <div class={`MR-input-wrapper-WC ${this.isActive && !this.isError.status ? "isFocus" : ""}
          ${this.isError.status && this.isError.priority ?
            "isError" :
            this.isError.status && !this.isError.priority && !this.isActive ? "isError" : this.isError.status && this.isError.priority ? "isInvalid" : ""}`}>
          <label ref={(el) => this.labelInput = el as HTMLElement}>{this.name}</label>
          <input
            ref={(el) => this.textInput = el as HTMLInputElement}
            onFocus={() => this.isActive = true}
            onBlur={this.handleBlur}
            onInput={(event) => this.handleChange(event)}
            class={`MR-input-WC ${this.isError ? "error" : ""}`}
            placeholder={this.placeholder}
            name={this.name}
            type={this.type}
            value={this.value} />

        </div>
        {
          this.isError.message.length && this.isError.status ?
            <p class={this.isError.priority ? "invalid" : ""}>{this.isError.message}</p> : null
        }
      </Host>);
  }
}
