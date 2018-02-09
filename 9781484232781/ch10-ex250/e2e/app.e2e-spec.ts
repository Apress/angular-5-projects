import { Ch10Ex250Page } from './app.po';

describe('ch10-ex250 App', () => {
  let page: Ch10Ex250Page;

  beforeEach(() => {
    page = new Ch10Ex250Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
