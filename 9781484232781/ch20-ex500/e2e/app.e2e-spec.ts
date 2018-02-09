import { Ch20Ex500Page } from './app.po';

describe('ch20-ex500 App', () => {
  let page: Ch20Ex500Page;

  beforeEach(() => {
    page = new Ch20Ex500Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
