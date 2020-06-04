import { Component,  h } from '@stencil/core';

@Component({
  tag: 'moben-card',
  styleUrl: 'moben-card.css',
  shadow: true,
})
export class MobenCard  {
  

  render() {
    return (
      <div class="Wrapper">
       <slot />
      </div>
    );
  }

}
