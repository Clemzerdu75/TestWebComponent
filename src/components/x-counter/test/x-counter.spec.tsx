import { newSpecPage } from '@stencil/core/testing';
import { XCounter } from './x-counter';

describe('x-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XCounter],
      html: `<x-counter></x-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <x-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-counter>
    `);
  });
});
