import topNotification from "./modules/topNotification.js";
import { getFileName, getFileKind } from "./modules/handleFile.js";

$("#btn-test").click(function () {
  var notification = new topNotification("Content demo");
  notification.show();
});

function init() {
  setTimeout(() => {
    $("#top-bar").slideUp("swing");
  }, 5000);
}

function loading() {
  $(document).html("LOADING...");
}

init();

function submitFormSharing(event) {
  // Check file is valid
  var filename = getFileName(document.getElementById("file_upload"));
  console.log(getFileKind(filename));
  // event.preventDefault();
}


window.loading = loading;
window.submitFormSharing = submitFormSharing;
