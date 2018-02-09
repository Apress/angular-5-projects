import { Ch20Ex300Page } from './app.po';

describe('ch20-ex300 App', () => {
  let page: Ch20Ex300Page;

  beforeEach(() => {
    page = new Ch20Ex300Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
