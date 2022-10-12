const GetPage = require("./utils/GetPage.js");

class BooruApi {

  async GetImage(tags, page) {
    return GetPage.getHtml(tags, page);
  }
}

module.exports = BooruApi;