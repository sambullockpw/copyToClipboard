function copyToClipboard() {
  var text = document.getElementById("textArea").value;
  navigator.clipboard.writeText(text).then(function() {
      // Promise resolved successfully.
      alert("'" + text + "'" + " copied to clipboard");
  }, function() {
      // Promise rejected.
      alert("Unable to write " + "'" + text + "'" + " to clipboard. :-(");
  });
}
function showIcon() {
  document.getElementById("icon").hidden = false;
  //alert("mouse ON element");
}
function hideIcon() {
  setTimeout(function(){
    document.getElementById("icon").hidden = true;
  //alert("mouse OFF element");
}, 500);
}
