import GetPage from "./utils/GetPage.mjs";

class BooruApi {
  async GetImage(tags, page) {
    return GetPage.getHtml(tags, page);
  }
}

export default new BooruApi();