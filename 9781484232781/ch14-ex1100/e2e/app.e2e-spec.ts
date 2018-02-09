import { Ch14Ex100Page } from './app.po';

describe('ch14-ex100 App', function() {
  let page: Ch14Ex100Page;

  beforeEach(() => {
    page = new Ch14Ex100Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
