import { Ch21Ex500Page } from './app.po';

describe('ch21-ex500 App', () => {
  let page: Ch21Ex500Page;

  beforeEach(() => {
    page = new Ch21Ex500Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
