import { newE2EPage } from '@stencil/core/testing';

describe('mr-simple-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mr-simple-input></mr-simple-input>');

    const element = await page.find('mr-simple-input');
    expect(element).toHaveClass('hydrated');
  });
});
