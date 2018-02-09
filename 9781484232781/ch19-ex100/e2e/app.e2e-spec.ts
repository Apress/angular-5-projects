import { Ch19Ex100Page } from './app.po';

describe('ch19-ex100 App', () => {
  let page: Ch19Ex100Page;

  beforeEach(() => {
    page = new Ch19Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
