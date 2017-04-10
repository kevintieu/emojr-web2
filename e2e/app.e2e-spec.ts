import { EmojrWebPage } from './app.po';

describe('emojr-web App', function() {
  let page: EmojrWebPage;

  beforeEach(() => {
    page = new EmojrWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
