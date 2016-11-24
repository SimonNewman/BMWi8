function resize(width, height, className){
  $(className).css("min-height", ($(className).width()*(height/width)));
}

function resizeAll() {
  resize(1920, 981, ".slider");
  resize(1270, 420, ".interior");
  /*var pictureHeight = $(".picture").css("height");
  $(".text").css("height", pictureHeight);*/
  //$(".text").css("bottom", pictureHeight - 80);
}

$(window).resize(function(){
  resizeAll();
});

(new Image()).src = "images/bg4.jpg";
(new Image()).src = "images/bg2.jpg";

$(function(){
  resizeAll();
});

$(".featuresPicture .circle").hover(function(){
  $(this).parent().find(".content").fadeIn();
},function(){
  $(this).parent().find(".content").fadeOut();
});

var intervalID = window.setInterval(sliderTimer, 4000);

function sliderTimer() {
	var images = ["images/bg4.jpg", "images/bg2.jpg"];

	nextImage = $(".slider").data("next-bg");
	console.log(images.length);

	if (nextImage) {
		if (nextImage == (images.length - 1)) { // last image
			nextImage = 0;
		} else {
			nextImage++;
		}
		$(".slider").data("next-bg", nextImage);
		$(".slider").css("background-image", "url(" + images[nextImage] + ")");
	} else {
		nextImage = 1;
		$(".slider").data("next-bg", nextImage);
		$(".slider").css("background-image", "url(" + images[nextImage] + ")");
	}
}
