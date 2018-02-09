import { Ch14Ex600Page } from './app.po';

describe('ch14-ex600 App', function() {
  let page: Ch14Ex600Page;

  beforeEach(() => {
    page = new Ch14Ex600Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
