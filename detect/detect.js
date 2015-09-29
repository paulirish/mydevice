// detect.js by @goetter and Alsacreations

// config variables
var delay = 2000, // DOM load breakpoint in millisecond
  pxratio = 2, // pixel-ratio breakpoint 
  name = "detect", // className to select
  smallImg = "small", // prefix or suffix for small img (ex: "small" for "/small/pic.png")
  bigImg = "big"; // prefix or suffix for big img (ex: "big" for "/big/pic.png")

if (window.addEventListener) {
  window.addEventListener('load', domload);
}

function domload() {
  // navigation timing begins 
  var perf = window.performance.timing;

  if (perf !== undefined) {
    var timing = perf.domComplete - perf.domLoading,
      imgs, i;
    if (timing <= delay) {
      // now pixel density detect
      q = "(-webkit-min-device-pixel-ratio: " + pxratio + "), (min-resolution: " + pxratio * 96 + "dpi), (min-resolution: " + pxratio + "dppx)";
      if (("matchMedia" in window) && window.matchMedia(q).matches) {
        // Everything OK ? Go Go Go !
        // Grab all images with className
        elts = document.getElementsByClassName(name);
        // Get src value and change it
        for (i = 0; i < elts.length; i++) {
          if (elts[i].src.indexOf(smallImg) >= 0)
            elts[i].src = elts[i].src.replace(smallImg, bigImg);
        }
      }
    }
  }
}