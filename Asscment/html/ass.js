let imageIndex = 0;
const imageArray = ["anh0.png","anh1.png","anh4.png", "anh5.jpg", "anh6.jpg"];
function nextLoat() {
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
    document.getElementById("imgElm").src = imageArray[imageIndex];
}

function preLoat() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = imageArray.length - 1;
    }
    document.getElementById("imgElm").src = imageArray[imageIndex];
}
function zoomImage() {
  const images = document.querySelectorAll('[id^="Image0"]');
  images.forEach(image => {
      image.style.transform = "scale(1.2)";
  });
}

function unzoomImage() {
  const images = document.querySelectorAll('[id^="Image"]');
  images.forEach(image => {
      image.style.transform = "scale(1)";
  });
}
function zoomImage1() {
  const images = document.querySelectorAll('[id^="Image1"]');
  images.forEach(image => {
      image.style.transform = "scale(1.2)";
  });
}

function unzoomImage1() {
  const images = document.querySelectorAll('[id^="Image1"]');
  images.forEach(image => {
      image.style.transform = "scale(1)";
  });
}
function zoomImage2() {
  const images = document.querySelectorAll('[id^="Image2"]');
  images.forEach(image => {
      image.style.transform = "scale(1.2)";
  });
}

function unzoomImage2() {
  const images = document.querySelectorAll('[id^="Image2"]');
  images.forEach(image => {
      image.style.transform = "scale(1)";
  });
}
function zoomImage3() {
  const images = document.querySelectorAll('[id^="Image3"]');
  images.forEach(image => {
      image.style.transform = "scale(1.2)";
  });
}

function unzoomImage3() {
  const images = document.querySelectorAll('[id^="Image3"]');
  images.forEach(image => {
      image.style.transform = "scale(1)";
  });
}
function zoomImage4() {
  const images = document.querySelectorAll('[id^="Image4"]');
  images.forEach(image => {
      image.style.transform = "scale(1.2)";
  });
}

function unzoomImage4() {
  const images = document.querySelectorAll('[id^="Image4"]');
  images.forEach(image => {
      image.style.transform = "scale(1)";
  });
}
function zoomImage5() {
  const images = document.querySelectorAll('[id^="Image5"]');
  images.forEach(image => {
      image.style.transform = "scale(1.2)";
  });
}

function unzoomImage5() {
  const images = document.querySelectorAll('[id^="Image5"]');
  images.forEach(image => {
      image.style.transform = "scale(1)";
  });
}
function zoomImage6() {
  const images = document.querySelectorAll('[id^="Image6"]');
  images.forEach(image => {
      image.style.transform = "scale(1.2)";
  });
}

function unzoomImage6() {
  const images = document.querySelectorAll('[id^="Image6"]');
  images.forEach(image => {
      image.style.transform = "scale(1)";
  });
}