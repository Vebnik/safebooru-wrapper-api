import GetPage from "./utils/GetPage";

GetPage.getHtml('loli', 0)
  .then((src) => console.log(src))