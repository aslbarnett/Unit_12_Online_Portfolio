/* +++-------------------------------------------+++
Photo/Video
+++-------------------------------------------+++ */

var thumbnailReference = "img/thumbnails/";
var imgReference = "img/photos/";
var videoReference = "https://www.youtube.com/embed/";

var images = [
	[thumbnailReference + "01.jpg", "Hay Bales", "I love hay bales. Took this snap on a drive through the countryside past some straw fields.", imgReference + "01.jpg"],
	[thumbnailReference + "02.jpg", "Lake", "The lake was so calm today. We had a great view of the snow on the mountains from here.", imgReference + "02.jpg"],
	[thumbnailReference + "03.jpg", "Canyon", "I hiked to the top of the mountain and got this picture of the canyon and trees below.", imgReference + "03.jpg"],
	[thumbnailReference + "04.jpg", "Iceberg", "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.", imgReference + "04.jpg"],
	[thumbnailReference + "05.jpg", "Desert", "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.", imgReference + "05.jpg"],
	[thumbnailReference + "06.jpg", "Fall", "Fall is coming, I love when the leaves on the trees start to change color.", imgReference + "06.jpg"],
	[thumbnailReference + "07.jpg", "Plantation", "I drove past this plantation yesterday, everything is so green!", imgReference + "07.jpg"],
	[thumbnailReference + "08.jpg", "Dunes", "My summer vacation to the Oregon Coast. I love the sandy dunes!", imgReference + "08.jpg"],
	[thumbnailReference + "09.jpg", "Countryside Lane", "We enjoyed a quiet stroll down this countryside lane.", imgReference + "09.jpg"],
	[thumbnailReference + "10.jpg", "Sunset", "Sunset at the coast! The sky turned a lovely shade of orange.", imgReference + "10.jpg"],
	[thumbnailReference + "11.jpg", "Cave", "I did a tour of a cave today and the view of the landscape below was breathtaking.", imgReference + "11.jpg"],
	[thumbnailReference + "12.jpg", "Bluebells", "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.", imgReference + "12.jpg"], 
];	

// can sub in a videoReference + the embed code to include youtube videos in the gallery e.g.:

// [thumbnailReference + "12.jpg", "Bluebells", "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.", videoReference + "cShjIXTSLKM"]


for (var file of images) {
	$(".main-container")
	.append('<a class="image-style" href="' + file[3] + '"><img src="' + file[0] + '" alt="' + file[1] + ' - ' + file[2] + '"></a>');
}

/* +++-------------------------------------------+++
HTML Tags
+++-------------------------------------------+++ */

var $overlay = $('<div id="overlay"></div>');
var $overlayContainer = $('<div id="overlay-container"></div>');
var $imagePrev = $('<a><img class="arrows" src="img/arrow_previous.png"></a>');
var $imageMain = $('<img class="main-image">');
var $videoMain = $('<iframe src="" frameborder="0" allowfullscreen></iframe>');
var $imageNext = $('<a id="next"><img class="arrows" src="img/arrow_next.png"></a>');
var $caption = $('<p></p>');

/* +++-------------------------------------------+++
Append to Body
+++-------------------------------------------+++ */

$overlayContainer.append($imagePrev).append($imageMain).append($videoMain).append($imageNext).append($caption);

$("body").append($overlay);
$("body").append($overlayContainer);

/* +++-------------------------------------------+++
Clicking on an Image in Gallery
+++-------------------------------------------+++ */

// when user clicks on an image
$("#imageGallery a").click(function(e) {
	// prevent the default behaviour
	e.preventDefault();
	
	getCurrentImage(this);

	// display an overlay
	$overlay.show();
	$overlayContainer.show();

	// display the caption from the alt attribute
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

/* +++-------------------------------------------+++
Next Image Click/Key Press
+++-------------------------------------------+++ */

// when user clicks on the next arrow
$imageNext.click(function() {
	getNextImage();
});

$("body").keydown(function(e) {
	if((e.keyCode || e.which) == 39) {
		if (typeof thisImage !== 'undefined') {
			getNextImage();
		}	
	}
});

/* +++-------------------------------------------+++
Previous Image Click/Key Press
+++-------------------------------------------+++ */

$imagePrev.click(function() {
	getPrevImage();
});

$("body").keydown(function(e) {
	if((e.keyCode || e.which) == 37) {
		if (typeof thisImage !== 'undefined') {
			getPrevImage();
		}
	}
});

/* +++-------------------------------------------+++
Exit Overlay Click/Key Press
+++-------------------------------------------+++ */

// when user clicks on the overlay
$('#overlay').on('click', function() {
	// the lightbox should disappear
	$overlay.hide();
	$overlayContainer.hide();
});

$("body").keydown(function(e) {
	if ((e.keyCode || e.which) == 27) {
		$overlay.hide();
		$overlayContainer.hide();
	}
});

/* +++-------------------------------------------+++
Search Filtering
+++-------------------------------------------+++ */

// SEARCH FILTERING
$("input").change(function() {
	var filter = $(this).val();
	if (filter) {
		$("#imageGallery").find('img[alt!="' + filter + '"]').parent().fadeOut("slow");
		$("#imageGallery").find('img[alt*="' + filter + '"]').parent().fadeIn("slow");
	} else {
		$("#imageGallery").find("a").slideDown();
	}
}).keyup(function() {
	$(this).change();
});

/* +++-------------------------------------------+++
Get Current Image - also checks if a youtube video or image
+++-------------------------------------------+++ */

// GET CURRENT IMAGE
function getCurrentImage(currentImage) {
	thisImage = currentImage;
	var imageLocation = $(currentImage).attr("href");
	$imageMain.attr("src", imageLocation);

	if ($(currentImage).attr("href").indexOf("youtube") != -1) {
		$videoMain.attr("src", $(currentImage).attr("href"));
		$imageMain.hide();
		$videoMain.show();
	} else {
		$videoMain.hide();
		$imageMain.show();
	}

	var captionText = $(currentImage).children("img").attr("alt");
    $caption.text(captionText);
}

/* +++-------------------------------------------+++
Get Previous Image
+++-------------------------------------------+++ */

// GET PREVIOUS IMAGE
function getPrevImage() {
	if ($(thisImage).prev().length !== 0) {
		thisImage = $(thisImage).prev("a");
	}
	getCurrentImage(thisImage);
}

/* +++-------------------------------------------+++
Get Next Image
+++-------------------------------------------+++ */

// GET NEXT IMAGE
function getNextImage() {
	if ($(thisImage).next().length !== 0) {
		thisImage = $(thisImage).next("a");
	}
	getCurrentImage(thisImage);
}
