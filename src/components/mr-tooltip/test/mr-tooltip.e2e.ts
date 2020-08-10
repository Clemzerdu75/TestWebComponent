import { newE2EPage } from '@stencil/core/testing';

describe('mr-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mr-tooltip></mr-tooltip>');

    const element = await page.find('mr-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
