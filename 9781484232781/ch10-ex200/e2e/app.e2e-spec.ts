import { Ex35Page } from './app.po';

describe('ex35 App', function() {
  let page: Ex35Page;

  beforeEach(() => {
    page = new Ex35Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
