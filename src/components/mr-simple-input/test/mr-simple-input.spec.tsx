import { newSpecPage } from '@stencil/core/testing';
import { MrSimpleInput } from './mr-simple-input';

describe('mr-simple-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MrSimpleInput],
      html: `<mr-simple-input></mr-simple-input>`,
    });
    expect(page.root).toEqualHtml(`
      <mr-simple-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mr-simple-input>
    `);
  });
});
