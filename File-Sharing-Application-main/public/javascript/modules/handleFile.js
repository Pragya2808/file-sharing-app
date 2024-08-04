function getFileName(input) {
  var fullPath = input.value;
  if (fullPath) {
    var startIndex =
      fullPath.indexOf("\\") >= 0
        ? fullPath.lastIndexOf("\\")
        : fullPath.lastIndexOf("/");
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf("\\") === 0 || filename.indexOf("/") === 0) {
      filename = filename.substring(1);
    }
    return filename;
  } else {
    return null;
  }
}

function getFileKind(filename) {
  var i;
  for (i = filename.length - 1; i >= 0; i--) {
    if (filename[i] === ".") {
      break;
    }
  }
  // console.log(filename.substring(i + 1));
  return filename.substring(i + 1);
}

export { getFileName, getFileKind };
