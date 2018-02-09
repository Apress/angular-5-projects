import { Ch17Ex300Page } from './app.po';

describe('ch17-ex300 App', () => {
  let page: Ch17Ex300Page;

  beforeEach(() => {
    page = new Ch17Ex300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
