import { newSpecPage } from '@stencil/core/testing';
import { MrCard } from './mr-card';

describe('mr-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MrCard],
      html: `<mr-card></mr-card>`,
    });
    expect(page.root).toEqualHtml(`
      <mr-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mr-card>
    `);
  });
});
