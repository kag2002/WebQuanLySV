import { WebQuanLySinhVienTemplatePage } from './app.po';

describe('WebQuanLySinhVien App', function() {
  let page: WebQuanLySinhVienTemplatePage;

  beforeEach(() => {
    page = new WebQuanLySinhVienTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
