import { newSpecPage } from '@stencil/core/testing';
import { MrTooltip } from './mr-tooltip';

describe('mr-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MrTooltip],
      html: `<mr-tooltip></mr-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <mr-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mr-tooltip>
    `);
  });
});
