var form = document.querySelector("#form-sharing");
var btnSubmit = document.querySelector('#form-sharing button[type="submit"]');
var inputFile = document.querySelector('#form-sharing input[type="file"]');

function checkFileValidate(event) {
  if (inputFile.files.length) {
    btnSubmit.removeAttribute("disabled");
    document.querySelector('#form-sharing input[name="name"]').value =
      inputFile.files[0].name;

    console.log(
      document.querySelector('#form-sharing input[name="name"]').value
    );
  } else {
    btnSubmit.addAttribute("disabled");
  }
}

function submitFormSharing(event) {
  event.preventDefault();
  var check = true;

  var input = document.querySelectorAll("#form-sharing input");
  input = Array.from(input);

  input = input.concat(
    Array.from(document.querySelectorAll("#form-sharing select"))
  );
  input = input.concat(
    Array.from(document.querySelectorAll("#form-sharing textarea"))
  );
  for (var i = 0; i < input.length; i++) {
    if (!input[i].value) {
      check = false;
      break;
    }
  }
  // console.log(input);
  if (check) {
    // send a post request.
    form.submit();
  } else {
    alert("Hãy kiểm tra lại thông tin của bạn");
    // send a error notification.
  }

  document.querySelector('#form-sharing input[name="name"]').value =
    inputFile.files[0].name;
}

window.checkFileValidate = checkFileValidate;
window.submitFormSharing = submitFormSharing;
