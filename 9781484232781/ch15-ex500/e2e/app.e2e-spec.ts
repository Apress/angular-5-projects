import { Ch15Ex500Page } from './app.po';

describe('ch15-ex500 App', function() {
  let page: Ch15Ex500Page;

  beforeEach(() => {
    page = new Ch15Ex500Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
