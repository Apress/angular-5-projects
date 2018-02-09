import { Ch17Ex500Page } from './app.po';

describe('ch17-ex500 App', () => {
  let page: Ch17Ex500Page;

  beforeEach(() => {
    page = new Ch17Ex500Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
