// Generated by CoffeeScript 1.7.1
(function() {
  var head, style;

  head = document.getElementsByTagName("head")[0];

  style = document.createElement("style");

  style.type = "text/css";

  style.styleSheet.cssText = ":before,:after{content: none !important;}";

  head.appendChild(style);

  window.attachEvent("onload", function() {
    head.removeChild(style);
  });

}).call(this);