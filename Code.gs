function doGet() {
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("Message Template Composer")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getUserEmail(){

  return Session.getActiveUser().getEmail();

}