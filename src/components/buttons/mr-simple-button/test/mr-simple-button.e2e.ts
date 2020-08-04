import { newE2EPage } from '@stencil/core/testing';

describe('mr-simple-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mr-simple-button></mr-simple-button>');

    const element = await page.find('mr-simple-button');
    expect(element).toHaveClass('hydrated');
  });
});
