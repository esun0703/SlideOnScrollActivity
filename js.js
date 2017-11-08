// Select All Images Listening For
  const sliderImages = document.querySelectorAll('.slide-in');
  // console.log(sliderImages);

  // Function that checks the slide whenever user scrolls
  function checkSlide(e){
    console.log(e);
  }



function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


// Event Handler for Scroll
  window.addEventListener('scroll', checkSlide);
