// Global variables
var currentImageIndex = 0;
var imageList = [];
var timer;

// Function to fetch image list from file using AJAX
function fetchImageList() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "image_list.txt", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            imageList = xhr.responseText.split("\n");
            updateImage();
        }
    };
    xhr.send();
}

// Function to update the current image
function updateImage() {
    var currentImage = document.getElementById("current-image");
    currentImage.src = imageList[currentImageIndex];
    clearTimeout(timer);
    timer = setTimeout(nextImage, 5000 );
}

// Function to show the previous image
function previousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imageList.length - 1;
    }
    updateImage();
}

// Function to show the next image
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= imageList.length) {
        currentImageIndex = 0;
    }
    updateImage();
}

// Function to update image list from file
function updateImageList() {
    fetchImageList();
}

// Load image list on page load
window.onload = fetchImageList;

//Function to update the image list
function updateImageList(){
    //Get the new image list
    fetchImageList();
    //Set the index to 0
    currentImageIndex = 0;
    var currentImage = document.getElementById("current-image");
    currentImage.src = imageList[currentImageIndex];
}