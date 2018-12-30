import { Ng7Page } from './app.po';

describe('ng7 App', () => {
  let page: Ng7Page;

  beforeEach(() => {
    page = new Ng7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
