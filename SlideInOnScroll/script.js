// This aux function is just to delay the calling of another function
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Select all images
const sliderImages = document.querySelectorAll('.slide-in');

// Function to check slide
function checkSlide(e) {
    // console.count(e)    // Verify how many times is called
    sliderImages.forEach(img => {
        // Half way through the image
        let slideInAt = (window.scrollY + window.innerHeight) -
            img.height / 2;
        // Bottom of the image
        let imageBottom = img.offsetTop + img.height;
        const isHalfShown = slideInAt > img.offsetTop;
        let isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));