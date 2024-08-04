class topNotification {
  constructor(content) {
    this.content = content;
    this.html = `<div class="container-fluid bg-danger d-flex justify-content-center" style="height: 30px;">
        <p class="my-auto text-center text-white text-opacity-75">${content}</p>
    </div>`;
  }
  show = function () {
    $("#top-bar").html(this.html);
    $("#top-bar").toggle('fast');
  };
}

export default topNotification;
