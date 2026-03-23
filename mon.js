
function upDate(previewPic) {

  // Log info (for debugging)

  console.log("Hovered:", previewPic.alt);

  // Get the display area

  const display = document.getElementById("image");

  // Change background image and caption text

  display.style.backgroundImage = "url('" + previewPic.src + "')";

  display.innerHTML = previewPic.alt;

}

function undo() {

  const display = document.getElementById
  
  // Reset to default state
  display.style.backgroundImage = "url('')";
  display.innerHTML = "Hover over an image below to display here.";
}