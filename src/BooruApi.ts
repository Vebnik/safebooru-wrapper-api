import GetPage from "./utils/GetPage";

class BooruApi {
  public async GetImage(tags: string[], page: number) {
    return GetPage.getHtml(tags, page);
  }
}

export default new BooruApi();