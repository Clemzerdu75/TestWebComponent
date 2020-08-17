import { newE2EPage } from '@stencil/core/testing';

describe('x-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-counter></x-counter>');

    const element = await page.find('x-counter');
    expect(element).toHaveClass('hydrated');
  });
});
