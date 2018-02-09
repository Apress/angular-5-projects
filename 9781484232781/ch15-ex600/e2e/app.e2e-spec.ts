import { Ch15Ex600Page } from './app.po';

describe('ch15-ex600 App', function() {
  let page: Ch15Ex600Page;

  beforeEach(() => {
    page = new Ch15Ex600Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
