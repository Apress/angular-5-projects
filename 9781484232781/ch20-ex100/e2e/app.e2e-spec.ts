import { Ch20Ex100Page } from './app.po';

describe('ch20-ex100 App', () => {
  let page: Ch20Ex100Page;

  beforeEach(() => {
    page = new Ch20Ex100Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
