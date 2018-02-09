import { Ch14Ex300Page } from './app.po';

describe('ch14-ex300 App', function() {
  let page: Ch14Ex300Page;

  beforeEach(() => {
    page = new Ch14Ex300Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
