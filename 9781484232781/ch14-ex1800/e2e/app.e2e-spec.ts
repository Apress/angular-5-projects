import { Ch14Ex800Page } from './app.po';

describe('ch14-ex800 App', function() {
  let page: Ch14Ex800Page;

  beforeEach(() => {
    page = new Ch14Ex800Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
