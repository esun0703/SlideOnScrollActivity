// Select All Images Listening For
  const sliderImages = document.querySelectorAll('.slide-in');
  // console.log(sliderImages);

  // Function that checks the slide whenever user scrolls
  function checkSlide(e){
    // console.log(e);
    // Loop Over Every Image and show only when image is halfway shown. 
    sliderImages.forEach(sliderImage => {
      // how far down bottom of page is scrolled
      // minus half of the image bottom halfway.
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // bottom of image.
      const imgBtm = sliderImage.offsetTop + sliderImage.height;

      // is image half show
        const isHalfShow = slideInAt > sliderImage.offsetTop
      // is scrolled past
        const isNotScrolledPast = window.scrollY < imgBtm
        if(isHalfShow && isNotScrolledPast){
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }

    });
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
  // call checkSlide inside debounce function. 
  window.addEventListener('scroll', debounce(checkSlide));
