import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mr-card',
  styleUrl: 'mr-card.css',
  shadow: true,
})
export class MrCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
