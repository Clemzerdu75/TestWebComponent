import { Component, h, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'moben-button',
  styleUrl: 'moben-button.css',
  shadow: true,
})
export class MobenButton  {
  @State() status: boolean = false;
  @Event() bloublou: EventEmitter;

  private statusHandler = () => {
    this.status = !this.status;
    this.bloublou.emit(this.status)
  }
  render() {
    return (
      <button onClick={this.statusHandler}>Button</button>
    );
  }

}
