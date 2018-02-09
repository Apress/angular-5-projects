import { Ex45Page } from './app.po';

describe('ex45 App', function() {
  let page: Ex45Page;

  beforeEach(() => {
    page = new Ex45Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
