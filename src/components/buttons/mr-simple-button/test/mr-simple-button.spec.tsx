import { newSpecPage } from '@stencil/core/testing';
import { MrSimpleButton } from './mr-simple-button';

describe('mr-simple-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MrSimpleButton],
      html: `<mr-simple-button></mr-simple-button>`,
    });
    expect(page.root).toEqualHtml(`
      <mr-simple-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mr-simple-button>
    `);
  });
});
