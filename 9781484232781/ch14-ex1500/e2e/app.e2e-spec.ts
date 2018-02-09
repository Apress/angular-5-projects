import { Ch14Ex500Page } from './app.po';

describe('ch14-ex500 App', function() {
  let page: Ch14Ex500Page;

  beforeEach(() => {
    page = new Ch14Ex500Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
