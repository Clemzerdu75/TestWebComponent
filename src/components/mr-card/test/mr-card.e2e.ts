import { newE2EPage } from '@stencil/core/testing';

describe('mr-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mr-card></mr-card>');

    const element = await page.find('mr-card');
    expect(element).toHaveClass('hydrated');
  });
});
