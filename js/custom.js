window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("top-main-navbar").style.marginTop = "0px";
    document.getElementById("top-main-navbar").style.backgroundColor = "rgb(20, 31, 76)";
  } else {
    document.getElementById("top-main-navbar").style.marginTop = "37px";
    document.getElementById("top-main-navbar").style.backgroundColor = "transparent";
  }
}

