import { Ex25Page } from './app.po';

describe('ex25 App', function() {
  let page: Ex25Page;

  beforeEach(() => {
    page = new Ex25Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
