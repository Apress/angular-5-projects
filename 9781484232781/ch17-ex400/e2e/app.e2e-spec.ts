import { Ch17Ex400Page } from './app.po';

describe('ch17-ex400 App', () => {
  let page: Ch17Ex400Page;

  beforeEach(() => {
    page = new Ch17Ex400Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
