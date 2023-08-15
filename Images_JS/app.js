var content = document.getElementById("content");
var buttonx = document.getElementById("showmore");
let yellowrose = document.getElementById("yellowrose");


window.onload = function() {

  buttonx.onclick = function() {
    document.getElementById("yellowrose").firstChild.style.visibility = "visible";
    if (content.className == "open") {
      //shrink the box
      content.className = "";
      buttonx.innerHTML = "Continue to the Sunlit Pavillion?";
    } else {
      //expand the box
      content.className = "open";
      buttonx.innerHTML = "As you wander through the garden grounds you notice a striking Yellow Rose";

    }

  }
}
