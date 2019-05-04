// JavaScipt file

// function to validate zip code length
function validate(){
	var zip = $("#zip").val();
	if(zip.length != 5 & zip.length != 0 || isNaN(zip)){
		alert("Zip code is not valid or not in a valid format.");
        return false;
	}
}

// The following javascript code was taken from https://www.makeuseof.com/tag/how-to-build-javascript-slideshow/
// slide show 1
$(document).ready(function() {
  $('#previous').on('click', function(){
    // Change to the previous image
    $('#im_' + currentImage).stop().fadeOut(1);
    decreaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
  }); 
  $('#next').on('click', function(){
    // Change to the next image
    $('#im_' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
  }); 

  var currentImage = 1;
  var totalImages = 3;

  function increaseImage() {
    /* Increase currentImage by 1.
    * Resets to 1 if larger than totalImages
    */
    ++currentImage;
    if(currentImage > totalImages) {
      currentImage = 1;
    }
  }
  function decreaseImage() {
    /* Decrease currentImage by 1.
    * Resets to totalImages if smaller than 1
    */
    --currentImage;
    if(currentImage < 1) {
      currentImage = totalImages;
    }
  }
});

// slideshow2
 $(document).ready(function() {
  $('#previous1').on('click', function(){
    // Change to the previous image
    $('#ima_' + currentImage).stop().fadeOut(1);
    decreaseImage();
    $('#ima_' + currentImage).stop().fadeIn(1);
  }); 
  $('#next1').on('click', function(){
    // Change to the next image
    $('#ima_' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('#ima_' + currentImage).stop().fadeIn(1);
  }); 

  var currentImage = 1;
  var totalImages = 3;

  function increaseImage() {
    /* Increase currentImage by 1.
    * Resets to 1 if larger than totalImages
    */
    ++currentImage;
    if(currentImage > totalImages) {
      currentImage = 1;
    }
  }
  function decreaseImage() {
    /* Decrease currentImage by 1.
    * Resets to totalImages if smaller than 1
    */
    --currentImage;
    if(currentImage < 1) {
      currentImage = totalImages;
    }
  }
});