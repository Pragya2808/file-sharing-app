export default async function setContentModal(title, content, btn1) {
  $("#modal-confirm .modal-title").text(title);
  $("#modal-confirm .modal-body").text(content);
  $("#modal-confirm .btn-confirm").text(btn1);
}
