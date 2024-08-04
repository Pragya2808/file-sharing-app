import setContentModal from "./modules/modal.js";

$(".btn-delete").click(async function () {
  setContentModal("Thông báo", "Chắc chắn muốn xóa file?", "Xác nhận");
  form = $(this).parents("form");
});

$("#modal-confirm .btn-confirm").click(function (e) {
  if (form) form.submit();
});

function validateForm(event) {
  console.log("validating");
}

window.validateForm = validateForm;
