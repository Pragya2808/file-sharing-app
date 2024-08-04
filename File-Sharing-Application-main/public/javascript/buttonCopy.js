import notificationHandler from "./modules/notification.js";

$(".copyButton").click(function () {
  var copyText = $(this);
  console.log(copyText.val());
  copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices // Why did this don't work?

  navigator.clipboard.writeText(copyText.val());

  // alert("Copied the text: " + copyText.val());
  notificationHandler("Thông Báo", `Đã copy <b>"${copyText.val()}"</b>`);
});
